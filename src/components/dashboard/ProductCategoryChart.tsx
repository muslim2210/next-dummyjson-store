"use client";
import React from "react";
import Chart from "react-apexcharts";
import { ProductModel } from "@/types/product";

type Props = {
  products: ProductModel[];
};

const ProductCategoryChart = ({ products }: Props) => {
  // Hitung jumlah produk per kategori
  const categoryCount: Record<string, number> = {};

  products.forEach((product) => {
    const category = product.category;
    if (categoryCount[category]) {
      categoryCount[category]++;
    } else {
      categoryCount[category] = 1;
    }
  });

  const categories = Object.keys(categoryCount);
  const seriesData = Object.values(categoryCount);

  const options = {
    chart: {
      id: "product-category-chart",
    },
    xaxis: {
      categories: categories,
      labels: {
        rotate: -45,
        style: {
          fontSize: "12px",
        },
      },
    },
    dataLabels: {
      enabled: true,
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
      },
    },
    colors: ["#3B82F6"], // tailwind blue-500
  };

  const series = [
    {
      name: "Products",
      data: seriesData,
    },
  ];

  return (
    <div className="bg-white p-2 lg:p-5 rounded-xl shadow-md">
      <h2 className="text-lg text-[#1E3A8A] text-center font-semibold mb-4">Products per Category</h2>
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default ProductCategoryChart;
