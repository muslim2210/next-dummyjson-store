"use client";
import { useFetchProducts } from '@/lib/action/useFetchProducts';
import React from 'react';
import LoadingCardDashboard from './LoadingCardDashboard';
import DashboardCard from './DashboardCard';
import { FaBox } from 'react-icons/fa';

const SummaryProducts = () => {
  const { data, loading } = useFetchProducts({
    page: 1,
    limit: 8
  });

  if (loading) {
    return <LoadingCardDashboard />;
  }

  if (data) {
    return (
      <DashboardCard
        title="Total Products"
        value={data.total}
        description="Currently available products"
        icon={<FaBox className="w-6 h-6 text-white" />}
        color="from-blue-600 to-blue-400 shadow-blue-500/40 shadow-lg"
      />
    );
  }

  return null;
};

export default SummaryProducts;
