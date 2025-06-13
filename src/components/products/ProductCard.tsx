"use client";
import Image from "next/image";
import Link from "next/link";
import { ProductModel } from "@/types/product";
import { BiHeart } from "react-icons/bi";
import { MdAddShoppingCart } from "react-icons/md";
import { useState } from "react";
import ProductRating from "./ProductRating";

interface Props {
  product: ProductModel;
}

const ProductCard = ({ product }: Props) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div
      className="transform overflow-hidden duration-200 hover:scale-105 flex flex-col gap-1"
      key={product.id}
    >
      <Link href={`/products/${product.id}`}>
        <div className="border border-slate-200 rounded-lg bg-gray-50">
          {product.thumbnail && (
            <Image
              width={300}
              height={300}
              src={product.thumbnail}
              alt={product.title}
              priority
              className="h-[150px] md:h-[200px] lg:h-[250px] md:w-full object-cover"
            />
          )}
        </div>
      </Link>
      <div className="py-4 px-2 flex flex-col gap-2">     
        <h2 className="text-sm md:text-lg font-medium text-[#1E3A8A]">
          {product.title}
        </h2>      
        <span className="text-xs md:text-sm text-slate-500">
          {product.category}
        </span>
        <div className="flex items-center justify-between">
          <p className="mr-2 text-sm md:text-lg font-semibold">
            $ {product.price.toLocaleString("en-US")}
          </p>
          <div className="flex items-center gap-3">
            <button onClick={() => setIsLiked(!isLiked)} className="cursor-pointer">
              <BiHeart fill={`${isLiked ? "red" : "black"}`} className="w-5 h-5" />
            </button>
            <MdAddShoppingCart className="w-5 h-5 cursor-pointer text-[#1E3A8A]"/>
          </div>
        </div>
        <ProductRating rating={product.rating} />
      </div>
    </div>
  );
};

export default ProductCard;
