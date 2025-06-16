"use client";
import { LoadingTitle } from '@/components/loading/LoadingTitle';
import Pagination from '@/components/fragments/Pagination';
import Wrapper from '@/components/layouts/Wrapper';
import { useFetchProducts } from '@/lib/action/useFetchProducts';
import { ProductModel } from '@/types/product';
import React, { useMemo, useState } from 'react'
import CatalogCard from '@/components/fragments/CatalogCard';
import { LoadingCardCatalog } from '@/components/loading/LoadingCardCatalog';

const ProductPage = () => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("none");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const isSearching = search.trim() !== "";
  const { data, loading } = useFetchProducts(
    { page: currentPage, limit: itemsPerPage, fetchAll: isSearching }
  );

  // Filter & sort saat searching aktif
  const filteredData = useMemo(() => {
    if (!data) return [];

    let result = [...data.products];

    if (isSearching) {
      result = result.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sortBy === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating-asc") {
      result.sort((a, b) => a.rating - b.rating);
    } else if (sortBy === "rating-desc") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [data, search, sortBy, isSearching]);

  // Paginasi lokal jika searching aktif, kalau tidak langsung dari API
  const paginatedData = useMemo(() => {
    if (isSearching) {
      const start = (currentPage - 1) * itemsPerPage;
      return filteredData.slice(start, start + itemsPerPage);
    }
    return filteredData;
  }, [filteredData, currentPage, isSearching]);

  const totalPages = isSearching
    ? Math.ceil(filteredData.length / itemsPerPage)
    : data
    ? Math.ceil(data.total / itemsPerPage)
    : 0;

  return (
    <Wrapper className="my-10">
      {loading ? (
        <LoadingTitle />
      ) : (
        <div className="text-gray-800 flex flex-col gap-2 mb-5">
          <h5 className="font-medium text-gray-500 text-base">Products / Page ({currentPage}) of {totalPages}</h5>
          <h2 className="font-semibold text-gray-700 text-xl md:text-3xl">All Products ({data && data.total})</h2>
        </div>
      )}
        
      <div className="my-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div className="w-full md:w-[50%]">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full border border-gray-300 px-4 py-2 text-sm rounded-lg"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
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
        {loading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <LoadingCardCatalog key={index} />
          ))
        ) : (
          paginatedData.map((product: ProductModel) => (
            <CatalogCard
              key={product.id}
              {...product}
              href={`/products/${product.id}`}
              isProduct
            />
          ))
        )}
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

export default ProductPage
