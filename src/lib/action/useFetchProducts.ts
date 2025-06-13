"use client";
import { ProductModel } from "@/types/product";
import { useEffect, useState } from "react";

export const useFetchProducts = () => {
  const [data, setData] = useState<ProductModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
        if (!res.ok) throw new Error("Gagal mengambil data produk");
        const data = await res.json();
        console.info("[APP] FETCH PRODUCTS", data);
        setData(data.products || []);
      } catch (err) {
        setError(err as Error);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { data, loading, error };
}

export const useFetchProductDetail = (id: number) => {
  const [data, setData] = useState<ProductModel | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);
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
