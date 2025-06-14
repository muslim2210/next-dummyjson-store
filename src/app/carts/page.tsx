"use client";
import CartProducts from '@/components/carts/CartProducts';
import LoadingSpinner from '@/components/fragments/LoadingSpinner';
import Wrapper from '@/components/layouts/Wrapper'
import { useFetchCarts } from '@/lib/action/useFetchCarts';
import React from 'react'

const CartsPage = () => {
  const { data, loading, error } = useFetchCarts();

  if (error) return <div>{error.message}</div>;
  if (loading) {
    return <LoadingSpinner />
  } else {
    return (
      <div className="w-full bg-gray-50">
        <Wrapper className="py-5 md:py-10">
          <div className="grid grid-cols-1 gap-4 lg:gap-7">  
            {data && data?.map((cart) => (
              <CartProducts key={cart.id} {...cart} />
            ))}
          </div>
        </Wrapper> 
      </div>
    )
  }

}

export default CartsPage
