"use client";
import LoadingSpinner from '@/components/fragments/LoadingSpinner';
import Wrapper from '@/components/layouts/Wrapper';
import ProductCard from '@/components/products/ProductCard';
import { useFetchProducts } from '@/lib/action/useFetchProducts';
import { ProductModel } from '@/types/product';
import React from 'react'

const ProductPage = () => {
 const { data, loading, error } = useFetchProducts();

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
          <h5 className="font-medium text-xs md:text-base">Products</h5>
          <h2 className="text-xl md:text-[34px] font-semibold leading-tight">
            All Products {`(${data.length})`}
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 mt-5 md:mt-10">
          {data?.map((product: ProductModel) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Wrapper>
  );
 }
}

export default ProductPage
