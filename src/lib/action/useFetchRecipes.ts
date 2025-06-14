"use client";
import { RecipeModel } from "@/types/recipes";
import { useEffect, useState } from "react";

export const useFetchRecipes = () => {
  const [data, setData] = useState<RecipeModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recipes`);
        if (!res.ok) throw new Error("Failed to fetch data Recipes");
        const data = await res.json();
        console.info("[APP] FETCH RECIPES", data);
        setData(data.recipes || []);
      } catch (err) {
        setError(err as Error);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return { data, loading, error };
}


export const useFetchRecipeDetail = (id: number) => {
  const [data, setData] = useState<RecipeModel | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recipes/${id}`);
        if (!res.ok) throw new Error("Gagal mengambil data produk");
        const data = await res.json();
        console.info("[APP] FETCH PRODUCT DETAIL", data);
        setData(data);
      } catch (err) {
        setError(err as Error);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [id]);

  return { data, loading, error };
}