"use client";
import { useFetchCarts } from '@/lib/action/useFetchCarts';
import React from 'react';
import LoadingCardDashboard from './LoadingCardDashboard';
import { FaShoppingCart } from 'react-icons/fa';
import DashboardCard from './DashboardCard';

const SummaryChart = () => {
  const { data, loading } = useFetchCarts({
    page: 1,
    limit: 8
  });

  if (loading) {
    return <LoadingCardDashboard />;
  }

  if (data) {
    return (
      <DashboardCard
        title="Total Carts"
        value={data.total || 0}
        description="Saved customer transactions"
        icon={<FaShoppingCart className="w-6 h-6 text-white" />}
        color="from-pink-600 to-pink-400 shadow-pink-500/40 shadow-lg"
      />
    );
  }

  return null;
};

export default SummaryChart;
