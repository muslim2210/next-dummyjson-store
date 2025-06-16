"use client";
import React from 'react';
import LoadingCardDashboard from './LoadingCardDashboard';
import DashboardCard from './DashboardCard';
import { FaFileAlt } from 'react-icons/fa';
import { useFetchPosts } from '@/lib/action/useFetchPosts';

const SummaryPosts = () => {
  const { data, loading } = useFetchPosts({
    page: 1,
    limit: 8
  });

  if (loading) {
    return <LoadingCardDashboard />;
  }

  if (data) {
    return (
      <DashboardCard
        title="Total Posts"
        value={data.total}
        description="Published articles or updates"
        icon={<FaFileAlt className="w-6 h-6 text-white" />}
        color="from-purple-600 to-purple-400 shadow-purple-500/40 shadow-lg"
      />
    );
  }

  return null;
};

export default SummaryPosts;
