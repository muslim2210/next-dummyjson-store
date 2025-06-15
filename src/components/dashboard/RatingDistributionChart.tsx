import React from "react";
import Chart from "react-apexcharts";
import { ProductModel } from "@/types/product";

type Props = {
  products: ProductModel[];
};

const RatingDistributionChart = ({ products }: Props) => {
  // Step 1: Hitung rating yang dibulatkan
  const ratingCount: Record<number, number> = {};

  products.forEach((product) => {
    const rating = Math.floor(product.rating); // contoh: 4.7 → 4
    if (ratingCount[rating]) {
      ratingCount[rating]++;
    } else {
      ratingCount[rating] = 1;
    }
  });

  // Step 2: Siapkan data chart
  const xCategories = [1, 2, 3, 4, 5];
  const seriesData = xCategories.map((rating) => ratingCount[rating] || 0);

  const options = {
    chart: {
      id: "rating-line-chart",
    },
    xaxis: {
      categories: xCategories.map((r) => `Rating ${r}`),
    },
    stroke: {
      curve: "smooth" as const,
    },
    dataLabels: {
      enabled: true,
    },
  };

  const series = [
    {
      name: "Number of Products",
      data: seriesData,
    },
  ];

  return (
    <div className="bg-white p-5 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">Rating Distribution</h2>
      <Chart options={options} series={series} type="line" height="300" />
    </div>
  );
};

export default RatingDistributionChart;
