"use client";
import LoadingSpinner from '@/components/fragments/LoadingSpinner';
import Wrapper from '@/components/layouts/Wrapper';
import PostCard from '@/components/posts/PostCard';
import { useFetchPosts } from '@/lib/action/useFetchPosts';
import React from 'react'

const PostPage = () => {
  const { data, loading, error } = useFetchPosts();
  if (error) return <div>{error.message}</div>;
  if (loading) {
    return <LoadingSpinner />;
  } else {
    return (
      <div className="w-full bg-gray-50">
        <Wrapper className="py-5 md:py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {data && data?.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default PostPage
