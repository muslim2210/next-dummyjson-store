import { CartModel } from "@/types/carts";
import { useEffect, useState } from "react";

export const useFetchCarts = () => {
  const [data, setData] = useState<CartModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCarts = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/carts`);
        if (!res.ok) throw new Error("Failed to fetch data carts");
        const data = await res.json();
        console.info("[APP] FETCH CARTS", data);
        setData(data.carts || []);
      } catch (err) {
        setError(err as Error);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCarts();
  }, []);

  return { data, loading, error };
}