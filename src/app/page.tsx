"use client";
import CartsBarChart from "@/components/dashboard/CartsBarChart";
import ProductsDonutChart from "@/components/dashboard/ProductsDonutChart";
import ProductsLineChart from "@/components/dashboard/ProductsLineChart";
import RecipesPieChart from "@/components/dashboard/RecipesPieChart";
import SummaryChart from "@/components/dashboard/SummaryChart";
import SummaryPosts from "@/components/dashboard/SummaryPosts";
import SummaryProducts from "@/components/dashboard/SummaryProducts";
import SummaryRecipes from "@/components/dashboard/SummaryRecipes";
import Wrapper from "@/components/layouts/Wrapper";

export default function Home() {
  return (
   <div className="w-full py-12 lg:py-14 bg-gray-50 min-h-screen">
    <Wrapper>
      <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 lg:grid-cols-4 gap-x-5 ">
        {/* products */}
        <SummaryProducts />
        {/* carts */}
        <SummaryChart />
        {/* recipes */}
        <SummaryRecipes />
        {/* posts */}
        <SummaryPosts />
      </div>
      <div className="mt-5 flex flex-col lg:flex-row gap-5 items-stretch">
        <div className="w-full lg:w-[35%]">
          <ProductsDonutChart />
        </div>
       
        <div className="flex-1 min-h-[300px] w-full lg:w-[60%]">
          <ProductsLineChart />
        </div>
      </div>
      <div className="mt-5 flex flex-col lg:flex-row gap-5 items-stretch">
        <div className="flex-1 min-h-[300px] w-full">
          <CartsBarChart/>
        </div>
        <div className="w-full flex-1">
          <RecipesPieChart />
        </div>
      </div>
    </Wrapper>
   </div>
  );
}
