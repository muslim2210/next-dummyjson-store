"use client";
import Image from "next/image";
import Link from "next/link";
import { BiHeart } from "react-icons/bi";
import { MdAddShoppingCart } from "react-icons/md";
import { useState } from "react";
import RatingComponent from "./RatingComponent";
import Tags from "./Tags";

interface CatalogCardProps {
  id: number;
  title: string;
  category?: string;
  thumbnail: string;
  price?: number;
  rating?: number;
  isProduct?: boolean;
  isRecipe?: boolean;
  tags?: string[];
  href?: string; // custom URL, default ke /products/:id
}

const CatalogCard = ({
  id,
  title,
  category,
  thumbnail,
  price,
  rating = 0,
  isProduct = false,
  isRecipe = false,
  tags = [],
  href,
}: CatalogCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div
      className="transform overflow-hidden duration-200 hover:scale-105 flex flex-col gap-1"
      key={id}
    >
      <Link href={`${href}`}>
        <div className="border border-slate-200 rounded-lg bg-gray-50">
          {thumbnail && (
            <Image
              width={300}
              height={300}
              src={thumbnail}
              alt={title}
              priority
              className="h-[150px] md:h-[200px] lg:h-[250px] md:w-full object-cover"
            />
          )}
        </div>
      </Link>
      <div className="py-4 px-2 flex flex-col gap-2">     
        <h2 className="text-sm md:text-lg font-medium text-[#1E3A8A]">
          {title}
        </h2>      
        <span className="text-xs md:text-sm text-slate-500">
          {category}
        </span>
        {/* price for product */}
        <div className="flex items-center justify-between">
          {price !== undefined && (
            <p className="mr-2 text-sm md:text-lg font-semibold">
              ${price.toLocaleString("en-US")}
            </p>
          )}
          {/* Tags */}
          {isRecipe && Tags.length > 0 && <Tags data={tags} />}
          <div className="flex items-center gap-3">
            <button onClick={() => setIsLiked(!isLiked)} className="cursor-pointer">
              <BiHeart fill={`${isLiked ? "red" : "black"}`} className="w-5 h-5" />
            </button>
            {isProduct && (
              <MdAddShoppingCart className="w-5 h-5 cursor-pointer text-[#1E3A8A]" />
            )}
          </div>
        </div>
        {/* end section for price */}
        {rating !== undefined && <RatingComponent rating={rating} />}
      </div>
    </div>
  );
};

export default CatalogCard;
