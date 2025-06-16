"use client";

import { useFetchRecipes } from '@/lib/action/useFetchRecipes';
import React from 'react';
import LoadingCardDashboard from './LoadingCardDashboard';
import dynamic from 'next/dynamic';

const RecipeMealTypeChart = dynamic(
  () => import('./RecipeMealTypeChart'),
  { ssr: false }
);

const RecipesPieChart = () => {
  const { data, loading } = useFetchRecipes({ fetchAll: true });

  if (loading) {
    return <LoadingCardDashboard />;
  }

  if (data) {
    return <RecipeMealTypeChart recipes={data.recipes || []} />;
  }

  return null;
};

export default RecipesPieChart;
