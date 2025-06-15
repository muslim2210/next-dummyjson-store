"use client";
import DashboardCard from "@/components/dashboard/DashboardCard";
import LoadingCardDashboard from "@/components/dashboard/LoadingCardDashboard";
import Wrapper from "@/components/layouts/Wrapper";
import { useFetchCarts } from "@/lib/action/useFetchCarts";
import { useFetchProducts } from "@/lib/action/useFetchProducts";
import { FaBox, FaShoppingCart } from "react-icons/fa";

export default function Home() {
  const products = useFetchProducts();
  const carts = useFetchCarts();

  return (
   <div className="w-full py-5 md:py-10 lg:py-14 bg-gray-50 min-h-screen">
    <Wrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
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
                value={carts.data?.length || 0}
                description="Saved customer transactions"
                icon={<FaShoppingCart className="w-6 h-6 text-white" />}
                color="from-pink-600 to-pink-400 shadow-pink-500/40 shadow-lg"
              />
            }
      </div>
    </Wrapper>
   </div>
  );
}
