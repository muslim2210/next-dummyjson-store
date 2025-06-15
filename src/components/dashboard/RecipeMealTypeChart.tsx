/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { RecipeModel } from "@/types/recipes";
import React from "react";
import Chart from "react-apexcharts";

type Props = {
  recipes: RecipeModel[];
};

const RecipeMealTypeChart = ({ recipes }: Props) => {
  const mealTypeCount: Record<string, number> = {};

  recipes.forEach((recipe) => {
    recipe.mealType.forEach((type) => {
      mealTypeCount[type] = (mealTypeCount[type] || 0) + 1;
    });
  });

  const rawLabels = Object.keys(mealTypeCount);
  const series = rawLabels.map((type) => mealTypeCount[type]);
  const labels = rawLabels; // tetap gunakan label asli untuk dataLabels
  const mealTypeMap = mealTypeCount; // referensi cepat untuk legend

  const options = {
    labels,
    chart: {
      type: "pie" as const,
    },
    legend: {
      position: "right" as const,
      formatter: function (label: string) {
        const value = mealTypeMap[label] || 0;
        return `${label} (${value} Recipes)`;
      },
    },
    tooltip: {
      y: {
        formatter: (val: number) => `${val} recipes`,
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val: number, opts: any) {
        const label = opts.w.globals.labels[opts.seriesIndex];
        return `${label} (${val.toFixed(1)}%)`;
      },
      style: {
        fontSize: '12px',
        fontWeight: 'bold',
      },
    },
    colors: ["#FBBF24", "#60A5FA", "#34D399", "#F87171", "#A78BFA"],
    responsive: [{
    breakpoint: 768,
    options: {
      legend: {
          position: "bottom" as const,
        },
      },
    }],
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md h-full">
      <h2 className="text-lg font-semibold mb-4 text-center text-[#1E3A8A]">
        Recipe Distribution by Meal Type
      </h2>
        <Chart options={options} series={series} type="pie" height={370} />
    </div>
  );
};

export default RecipeMealTypeChart;
