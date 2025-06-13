"use client";
// import React, { useState } from "react";
import { ProductModel } from "@/types/product";
import { BiHeart } from "react-icons/bi";
import ProductPrice from "./ProductPrice";
import ProductTagsAndDimensions from "./ProductTagsAndDimension";
import ProductRating from "./ProductRating";

interface ProductCardProps {
  productInfo: ProductModel;
}

const ProductInfo = ({ productInfo }: ProductCardProps) => {

  return (
    <>
      {/* PRODUCT TITLE */}
      <div className="text-2xl md:text-[34px] mt-3 md:mt-0 font-semibold text-[#1E3A8A] mb-2 leading-tight">
        {productInfo.title}
      </div>

      {/* PRODUCT SUBTITLE */}
      <div className="text-lg font-semibold mb-3">{productInfo.category} <span>| {productInfo.brand}</span></div>

      {/* PRODUCT PRICE */}
      <div className="flex items-center justify-between">
        <ProductPrice price={productInfo.price} discountPercentage={productInfo.discountPercentage} />
      </div>

      <div className="text-md font-medium text-black/[0.5]">incl. of taxes</div>
      <div className="text-md font-medium text-black/[0.5] mb-5">
        {productInfo.warrantyInformation ?? "No Warranty"}
      </div>
      <ProductRating rating={productInfo.rating} />


      {/* ADD TO CART BUTTON START */}
      <button
        className="w-full mt-5 py-4 rounded-full bg-[#1E3A8A] text-white text-lg font-medium cursor-pointer transition-transform active:scale-95 mb-3 hover:opacity-75"
      >
        Add to Cart
      </button>
      {/* ADD TO CART BUTTON END */}

      {/* WHISHLIST BUTTON START */}
      <div className="w-full py-4 rounded-full border hover:border-black text-lg font-medium transition-transform flex items-center justify-center gap-2 mb-10">
        Favourite
        <BiHeart size={20} />
      </div>
      {/* WHISHLIST BUTTON END */}
      
      <ProductTagsAndDimensions
        tags={productInfo.tags}
        dimensions={productInfo.dimensions}
      />
      <div>
        <div className="text-lg font-semibold mb-5">Product Description</div>
        <div className="text-primaryBlack text-base text-pretty mb-5">
          {productInfo.description}
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
