"use client";
import DashboardCard from "@/components/dashboard/DashboardCard";
import LoadingCardDashboard from "@/components/dashboard/LoadingCardDashboard";
import Wrapper from "@/components/layouts/Wrapper";
import { useFetchCarts } from "@/lib/action/useFetchCarts";
import { useFetchPosts } from "@/lib/action/useFetchPosts";
import { useFetchProducts } from "@/lib/action/useFetchProducts";
import { useFetchRecipes } from "@/lib/action/useFetchRecipes";
import { FaBox, FaFileAlt, FaShoppingCart, FaUtensils } from "react-icons/fa";

export default function Home() {
  const products = useFetchProducts();
  const carts = useFetchCarts();
  const recipes = useFetchRecipes();
  const posts = useFetchPosts();

  return (
   <div className="w-full py-12 lg:py-14 bg-gray-50 min-h-screen">
    <Wrapper>
      <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-4 gap-x-5">
        {/* products */}
        {products.loading ? 
          <LoadingCardDashboard/> 
          : products.error ? 
            <p className="text-red-500">{products.error?.message}</p> 
            :         
            <DashboardCard
              title="Total Products"
              value={products.data?.total || 0}
              description="Currently available products"
              icon={<FaBox className="w-6 h-6 text-white" />}
              color="from-blue-600 to-blue-400 shadow-blue-500/40 shadow-lg"
            />
        }
        {/* carts */}
        {carts.loading ? 
          <LoadingCardDashboard/> 
          : carts.error ? 
          <p className="text-red-500">{carts.error?.message}</p> 
          :         
          <DashboardCard
            title="Total carts"
            value={carts.data?.total || 0}
            description="Saved customer transactions"
            icon={<FaShoppingCart className="w-6 h-6 text-white" />}
            color="from-pink-600 to-pink-400 shadow-pink-500/40 shadow-lg"
          />
        }
        {/* recipes */}
        {recipes.loading ? 
          <LoadingCardDashboard/> 
          : recipes.error ? 
          <p className="text-red-500">{recipes.error?.message}</p> 
          :         
          <DashboardCard
            title="Total Recipes"
            value={recipes.data?.total || 0}
            description="Recipes available in the system"
            icon={<FaUtensils className="w-6 h-6 text-white" />}
            color="from-green-600 to-green-400 shadow-green-500/40 shadow-lg"
          />
        }
        {/* recipes */}
        {posts.loading ? 
          <LoadingCardDashboard/> 
          : posts.error ? 
          <p className="text-red-500">{posts.error?.message}</p> 
          :         
          <DashboardCard
            title="Total Posts"
            value={posts.data?.total || 0}
            description="Published articles or updates"
            icon={<FaFileAlt className="w-6 h-6 text-white" />}
            color="from-purple-600 to-purple-400 shadow-purple-500/40 shadow-lg"
          />
        }
      </div>
    </Wrapper>
   </div>
  );
}
