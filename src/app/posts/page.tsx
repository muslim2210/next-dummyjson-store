"use client";
import Pagination from '@/components/fragments/Pagination';
import Wrapper from '@/components/layouts/Wrapper';
import { LoadingCardCatalog } from '@/components/loading/LoadingCardCatalog';
import { LoadingTitle } from '@/components/loading/LoadingTitle';
import PostCard from '@/components/posts/PostCard';
import { useFetchPosts } from '@/lib/action/useFetchPosts';
import React, { useState } from 'react'

const PostPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const { data, loading } = useFetchPosts(
    { page: currentPage, limit: itemsPerPage }
  );
  const totalPages = data ? Math.ceil(data.total / itemsPerPage) : 0;
  
    return (
      <div className="w-full bg-gray-50">
        <Wrapper className="py-5 md:py-10">
          {loading ? (
            <LoadingTitle />
          ) : (
            <div className="text-gray-800 flex flex-col gap-2">
              <h5 className="font-medium text-gray-500 text-base">Posts / Page ({currentPage}) of {totalPages}</h5>
              <h2 className="font-semibold text-gray-700 text-xl md:text-3xl">All Posts ({data && data.total})</h2>
            </div>
          )}
          <div className='mb-7'>
            {/* Pagination */}
            {data && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => setCurrentPage(page)}
              />
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            { loading ? (
              Array.from({ length: 8 }).map((_, index) => (
                <LoadingCardCatalog key={index} />
              ))
            ) : (
              data && data.posts?.map((post) => (
                <PostCard key={post.id} {...post} />
              ))
            )}
          </div>
        </Wrapper>
      </div>
    );
  }

export default PostPage
