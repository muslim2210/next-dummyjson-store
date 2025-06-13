"use client";
import LoadingSpinner from '@/components/fragments/LoadingSpinner';
import Pagination from '@/components/fragments/Pagination';
import Wrapper from '@/components/layouts/Wrapper';
import { useFetchProducts } from '@/lib/action/useFetchProducts';
import { ProductModel } from '@/types/product';
import React, { useMemo, useState } from 'react'
import CatalogCard from '@/components/fragments/CatalogCard';

const ProductPage = () => {
 const { data, loading, error } = useFetchProducts();
 const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("none");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filteredData = useMemo(() => {
    if (!data) return [];
    const result = data.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );

    if (sortBy === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating-desc") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "rating-asc") {
      result.sort((a, b) => a.rating - b.rating);
    }

    return result;
  }, [data, search, sortBy]);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(start, start + itemsPerPage);
  }, [filteredData, currentPage]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

 if (error) return <p>{error.message}</p>;
 if (loading) {
  return (
    <div className='h-screen flex items-center justify-center'>
      <LoadingSpinner />
    </div>
  )
 } else {
  return (
      <Wrapper className="my-10">
        <div className="text-primaryBlack flex flex-col gap-2">
          <h5 className="font-medium text-gray-500 text-base">Products / Page ({currentPage}) of {totalPages}</h5>
        </div>
        <div className="my-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="w-full md:w-[50%]">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border border-gray-300 px-4 py-2 text-sm rounded-lg"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
      

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-gray-300 text-gray-700 focus-ring-[#1E3A8A] rounded-lg px-4 py-2 text-sm cursor-pointer"
        >
          <option value="none">Sort by</option>
          <option value="price-asc">Price (Low To High)</option>
          <option value="price-desc">Price (High To Low)</option>
          <option value="rating-asc">Rating (Low To High)</option>
          <option value="rating-desc">Rating (High To Low)</option>
        </select>
      </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 mt-5 md:mt-10">
          {paginatedData?.map((product: ProductModel) => (
            <CatalogCard key={product.id} {...product} isProduct />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </Wrapper>
  );
 }
}

export default ProductPage
