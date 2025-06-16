"use client";
import React from 'react';
import { useFetchRecipes } from '@/lib/action/useFetchRecipes';
import LoadingCardDashboard from './LoadingCardDashboard';
import DashboardCard from './DashboardCard';
import { FaUtensils } from 'react-icons/fa';

const SummaryRecipes = () => {
  const { data, loading } = useFetchRecipes({
    page: 1,
    limit: 8
  });

  if (loading) {
    return <LoadingCardDashboard />;
  }

  if (data) {
    return (
      <DashboardCard
        title="Total Recipes"
        value={data.total || 0}
        description="Recipes available in the system"
        icon={<FaUtensils className="w-6 h-6 text-white" />}
        color="from-green-600 to-green-400 shadow-green-500/40 shadow-lg"
      />
    );
  }

  return null;
};

export default SummaryRecipes;
