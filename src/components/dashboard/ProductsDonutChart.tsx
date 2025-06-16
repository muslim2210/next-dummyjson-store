"use client";
import { useFetchProducts } from '@/lib/action/useFetchProducts';
import React from 'react';
import LoadingCardDashboard from './LoadingCardDashboard';
import dynamic from 'next/dynamic';
const RatingDistributionChart = dynamic(
  () => import('./RatingDistributionChart'),
  { ssr: false }
);

const ProductsDonutChart = () => {
  const { data, loading } = useFetchProducts({
    fetchAll: true
  });

  if (loading) {
    return <LoadingCardDashboard />;
  }

  if (data) {
    return <RatingDistributionChart products={data.products || []} />;
  }

  return null;
};

export default ProductsDonutChart;
