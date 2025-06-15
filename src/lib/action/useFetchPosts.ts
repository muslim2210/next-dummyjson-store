"use client";
import { PostModel } from "@/types/post";
import { useEffect, useState } from "react";

type PostsResponse = {
  posts: PostModel[];
  total: number;
  skip: number;
  limit: number;
}

export const useFetchPosts = (page = 1, limit = 8) => {
  const [data, setData] = useState<PostsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCarts = async () => {
      try {
        setLoading(true);
        const skip = (page - 1) * limit;
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts?limit=${limit}&skip=${skip}`);
        if (!res.ok) throw new Error("Failed to fetch data posts");
        const json = await res.json();
        console.info("[APP] FETCH POSTS", json);
        setData(json);
      } catch (err) {
        setError(err as Error);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCarts();
  }, [page, limit]);

  return { data, loading, error };
}