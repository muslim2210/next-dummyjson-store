"use client";
import CartProducts from '@/components/carts/CartProducts';
import Pagination from '@/components/fragments/Pagination';
import Wrapper from '@/components/layouts/Wrapper'
import LoadingCartsPage from '@/components/loading/LoadingCartsPage';
import { LoadingTitle } from '@/components/loading/LoadingTitle';
import { useFetchCarts } from '@/lib/action/useFetchCarts';
import React, { useState } from 'react'

const CartsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const { data, loading } = useFetchCarts(
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
              <h5 className="font-medium text-gray-500 text-base">Carts / Page ({currentPage}) of {totalPages}</h5>
              <h2 className="font-semibold text-gray-700 text-xl md:text-3xl">All Carts Transactions ({data && data.total})</h2>
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
          <div className="grid grid-cols-1 gap-4 lg:gap-7">  
            {loading ? (
              Array.from({ length: 8 }).map((_, index) => (
                <LoadingCartsPage key={index} />
              ))
            ) : (
                data && data.carts?.map((cart) => (
                <CartProducts key={cart.id} {...cart} />
              ))
            )}


            
          </div>
        </Wrapper> 
      </div>
    )
  }

export default CartsPage
