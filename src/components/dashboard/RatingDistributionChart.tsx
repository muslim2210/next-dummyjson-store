"use client";
import React from "react";
import Chart from "react-apexcharts";
import { ProductModel } from "@/types/product";

type Props = {
  products: ProductModel[];
};

const RatingDistributionChart = ({ products }: Props) => {
  const ratingCount: Record<number, number> = {};

  products.forEach((product) => {
    const rating = Math.floor(product.rating);
    ratingCount[rating] = (ratingCount[rating] || 0) + 1;
  });

  const xCategories = [1, 2, 3, 4, 5];
  const series = xCategories.map((r) => ratingCount[r] || 0);
  const total = series.reduce((sum, val) => sum + val, 0);

  const labels = xCategories.map((r, i) => {
    const value = series[i];
    const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : "0.0";
    return `Rating ${r} (${percentage}%)`;
  });


  const options = {
    labels,
    chart: {
      type: "donut" as const,
    },
    dataLabels: {
      enabled: true,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      formatter: function (_val: number, opts: any) {
        const value = opts.w.globals.series[opts.seriesIndex];
        const label = opts.w.globals.labels[opts.seriesIndex];
        const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : "0.0";
        return `${label} ${percentage}%`;
      },
      style: {
        fontSize: '12px',
        fontWeight: 'bold',
      }
    },
    tooltip: {
      y: {
        formatter: (val: number) => `${val} products`,
      },
    },
    legend: {
      position: "bottom" as const,
    },
    colors: ["#F87171", "#FBBF24", "#34D399", "#60A5FA", "#A78BFA"],
  };

  return (
    <div className="bg-white p-2 lg:p-3 rounded-xl shadow-md flex-1 h-full">
      <h2 className="text-lg font-semibold text-[#1E3A8A] mb-4 text-center">
        Rating Distribution Products
      </h2>
      <Chart options={options} series={series} type="donut" height={300} />
    </div>
  );
};

export default RatingDistributionChart;
