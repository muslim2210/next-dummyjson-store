"use client";

import { useFetchProducts } from '@/lib/action/useFetchProducts';
import React from 'react';
import LoadingCardDashboard from './LoadingCardDashboard';
import dynamic from 'next/dynamic';

// Import dynamic untuk matikan SSR
const ProductCategoryChart = dynamic(
  () => import('./ProductCategoryChart'),
  { ssr: false }
);

const ProductsLineChart = () => {
  const { data, loading } = useFetchProducts({ fetchAll: true });

  if (loading) {
    return <LoadingCardDashboard />;
  }

  if (data) {
    return <ProductCategoryChart products={data.products || []} />;
  }

  return null;
};

export default ProductsLineChart;
