import { ProductInCart } from "@/types/carts";
import Image from "next/image";
import React from "react";
import ProductPrice from "../products/ProductPrice";

const CartItem = ( cartItem: ProductInCart) => {

  return (
    <div className="flex gap-4 pb-2 md:gap-7 border-b">
      {/* IMAGE START */}
      <div className="shrink-0 aspect-square w-[70px] md:w-[80px] lg:w-[100px] md:bg-slate-200 md:rounded-md overflow-hidden">
        {cartItem.thumbnail && (
          <Image
            width={200}
            height={200}
            src={cartItem.thumbnail}
            alt={cartItem.title}
          />
        )}
      </div>
      {/* IMAGE END */}

      <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between">
        {/* PRODUCT TITLE */}
        <div className="flex flex-col gap-1 lg:gap-2">
          <h3 className="text-lg md:text-lg lg:text-xl leading-normal font-semibold text-[#1E3A8A]">
            {cartItem.title}
          </h3>
          <span className="text-sm font-medium text-black/[0.5]">{cartItem.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })} x {cartItem.quantity}</span>
        </div>
        {/* PRODUCT SUBTITLE */}
        <div className="text-sm md:text-md font-medium text-black/[0.5] mt-3 md:mt-0">
          Total
          <ProductPrice price={cartItem.total} discountPercentage={cartItem.discountPercentage} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
