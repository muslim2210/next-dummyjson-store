"use client";
import { PostModel } from "@/types/post";
import { useEffect, useState } from "react";

export const useFetchPosts = () => {
  const [data, setData] = useState<PostModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
        if (!res.ok) throw new Error("Failed to fetch data Posts");
        const data = await res.json();
        console.info("[APP] FETCH POSTS", data);
        setData(data.posts || []);
      } catch (err) {
        setError(err as Error);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { data, loading, error };
}