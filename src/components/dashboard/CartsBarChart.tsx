"use client";

import React from 'react';
import LoadingCardDashboard from './LoadingCardDashboard';
import dynamic from 'next/dynamic';
import { useFetchCarts } from '@/lib/action/useFetchCarts';

const CartTotalChart = dynamic(
  () => import('./CartTotalChart'),
  { ssr: false }
);

const CartsBarChart = () => {
  const { data, loading } = useFetchCarts({ fetchAll: true });

  if (loading) {
    return <LoadingCardDashboard />;
  }

  if (data) {
    return <CartTotalChart carts={data.carts || []} />;
  }

  return null;
};

export default CartsBarChart;
