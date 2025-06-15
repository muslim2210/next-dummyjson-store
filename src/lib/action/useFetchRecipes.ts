"use client";
import { RecipeModel } from "@/types/recipes";
import { useEffect, useState } from "react";

type RecipeResponse = {
  recipes: RecipeModel[];
  total: number;
  skip: number;
  limit: number;
}

export const useFetchRecipes = (page = 1, limit = 8, fetchAll = false) => {
  const [data, setData] = useState<RecipeResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCarts = async () => {
      try {
        setLoading(true);
        const skip = (page - 1) * limit;
        const query = fetchAll
          ? `${process.env.NEXT_PUBLIC_API_URL}/recipes?limit=194`
          : `${process.env.NEXT_PUBLIC_API_URL}/recipes?limit=${limit}&skip=${skip}`;

        const res = await fetch(query);
        if (!res.ok) throw new Error("Failed to fetch data recipes");
        const json = await res.json();
        console.info("[APP] FETCH RECIPES", json);
        setData(json);
      } catch (err) {
        setError(err as Error);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCarts();
  }, [page, limit, fetchAll]);

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