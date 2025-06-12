"use client";
import Wrapper from '@/components/layouts/Wrapper';
import useFetchProducts from '@/lib/action/useFetchProducts';
import Image from 'next/image';
import React from 'react'

const ProductPage = () => {
 const { data, loading, error } = useFetchProducts();
 if (loading) return <p>Loading...</p>;
 if (error) return <p>{error.message}</p>;

 return (
    <Wrapper className="my-10">
      <div className="text-primaryBlack flex flex-col gap-2">
        <h5 className="font-medium text-xs md:text-base">Products</h5>
        <h2 className="text-xl md:text-[34px] font-semibold leading-tight">
          All Products {`(${data.length})`}
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 mt-5 md:mt-10">
        {data.map((product) => (
          <div key={product.id} className="w-full h-[200px] md:h-[300px]">
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={300}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

export default ProductPage
