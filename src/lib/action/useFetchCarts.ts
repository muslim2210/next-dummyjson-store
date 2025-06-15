"use client";
import { CartModel } from "@/types/carts";
import { useEffect, useState } from "react";

type CartResponse = {
  carts: CartModel[];
  total: number;
  skip: number;
  limit: number;
}

export const useFetchCarts = (page = 1, limit = 8, fetchAll = false) => {
  const [data, setData] = useState<CartResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCarts = async () => {
      try {
        setLoading(true);
        const skip = (page - 1) * limit;
        const query = fetchAll
          ? `${process.env.NEXT_PUBLIC_API_URL}/carts?limit=194`
          : `${process.env.NEXT_PUBLIC_API_URL}/carts?limit=${limit}&skip=${skip}`;

        const res = await fetch(query);
        if (!res.ok) throw new Error("Failed to fetch data carts");
        const json = await res.json();
        console.info("[APP] FETCH CARTS", json);
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