"use client";
import { CartModel } from "@/types/carts";
import React from "react";
import dynamic from "next/dynamic";

// ⛔ Hindari SSR untuk react-apexcharts
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface Props {
  carts: CartModel[];
}

const CartTotalChart = ({ carts }: Props) => {
  const topCarts = [...carts]
    .sort((a, b) => b.total - a.total)
    .slice(0, 10);

  const categories = topCarts.map((cart) => `Cart ${cart.id}`);
  const totals = topCarts.map((cart) => cart.total);
  const discounted = topCarts.map((cart) => cart.discountedTotal);

  const series = [
    { name: "Total", data: totals },
    { name: "Discounted Total", data: discounted },
  ];

  const options = {
    chart: {
      type: "bar" as const,
      stacked: false,
    },
    xaxis: {
      categories,
      labels: {
        rotate: -45,
        style: { fontSize: "11px" },
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#1E3A8A", "#60A5FA"],
    legend: {
      position: "top" as const,
    },
    tooltip: {
      y: {
        formatter: (val: number) => `$${val.toLocaleString()}`,
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-[#1E3A8A] text-center">
        Total vs Discounted Total per Cart (Top 10)
      </h2>
      <Chart options={options} series={series} type="bar" height={400} />
    </div>
  );
};

export default CartTotalChart;
