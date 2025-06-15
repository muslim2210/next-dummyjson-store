"use client";
import { ProductModel } from "@/types/product";
import { useEffect, useState } from "react";

type ProductResponse = {
  products: ProductModel[];
  total: number;
  skip: number;
  limit: number;
}

export const useFetchProducts = (page = 1, limit = 10, fetchAll = false) => {
  const [data, setData] = useState<ProductResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const skip = (page - 1) * limit;
        const query = fetchAll
          ? `${process.env.NEXT_PUBLIC_API_URL}/products?limit=194`
          : `${process.env.NEXT_PUBLIC_API_URL}/products?limit=${limit}&skip=${skip}`;

        const res = await fetch(query);
        if (!res.ok) throw new Error("Failed to fetch products");
        const products = await res.json();
        console.info("[APP] FETCH PRODUCTS", products);
        setData(products);
      } catch (err) {
        setError(err as Error);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, limit, fetchAll]);

  return { data, loading, error };
};

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
