"use client";
import LoadingSpinner from "@/components/fragments/LoadingSpinner";
import Wrapper from "@/components/layouts/Wrapper";
import { useFetchRecipeDetail } from "@/lib/action/useFetchRecipes";
import Image from "next/image";
import { IoMdTime } from "react-icons/io";
import { use } from "react";
import RatingComponent from "@/components/fragments/RatingComponent";
import RecipeTags from "@/components/recipes/RecipeTags";

interface RecipePropModel {
  recipeId: number;
}

interface RecipePageProps {
  params: Promise<RecipePropModel>;
}


const RecipePageDetail = ({ params }: RecipePageProps) => {
  const { recipeId } = use(params);
  const { data, loading, error } = useFetchRecipeDetail(recipeId);
 

  if (error) return <p>{error.message}</p>;
  if (loading) {
    return (
      <LoadingSpinner />
    )
  } else {
    return (
      <div className="w-full bg-gray-50">
        <Wrapper className="py-10 lg:py-12 lg:px-12">
          <div className="flex flex-col md:flex-row md:px-5 lg:px-10 gap-2 md:gap-12 mx-auto">
            {/* left column start */}
            <div className="w-full h-[300px] md:mt-4 md:w-auto flex-[1]">
              {data && (
                <Image priority src={data.image} alt={data.name} width={500} height={500} />
              )}
            </div>
            {/* left column end */}
  
            {/* right column start */}
            <div className="flex-[1] md:mx-auto">
              {data && (
                <>
                  <div className="text-2xl lg:text-[34px] mt-3 md:mt-0 font-semibold text-[#1E3A8A] mb-2 leading-tight">
                    {data.name}
                  </div>
                  <div className="text-lg font-thin mb-1 lg:mb-3">{data.cuisine} - <span>{data.difficulty}</span></div>
                  <div className="text-md flex flex-col gap-1 lg:gap-2 font-medium text-black/[0.5] mb-3 lg:mb-5">
                    <div className="flex items-center gap-2">
                      <IoMdTime />
                      <h5>Prep Time : {data.prepTimeMinutes} Minutes</h5>
                    </div>
                    <div className="flex items-center gap-2">
                      <IoMdTime />
                      <h5>Cook Time : {data.cookTimeMinutes} Minutes</h5>
                    </div>
                  </div>
                  {/* ingredients */}
                  <ul className="text-md flex flex-col gap-0 lg:gap-1 font-medium text-black/[0.5] mb-5">
                    <li>
                      <span className="font-semibold">Ingredients :</span> 
                    </li>
                    {data.ingredients.map((ingredient, idx) => (
                      <li key={idx} className="list-disc list-inside text-gray-600">{ingredient}</li>
                    ))}
                  </ul>
                </>
               )}
               {data && (
                <>
                  <RecipeTags meals={data.mealType} tags={data.tags} />
                  <div className="mt-5">
                    <RatingComponent rating={data.rating} />
                  </div>
                </>
              )}
            </div>
            {/* right column end */}
          </div>

          <div className="w-full mt-12 md:px-5 md:mx-auto lg:px-10">
            <h1>Instructions</h1>
            <ul>
              {data && data.instructions.map((instruction, idx) => (
                <li key={idx} className="list-inside text-gray-600">{idx + 1}. {instruction}</li>
              ))}
            </ul>
          </div>          
        </Wrapper>
      </div>
    );
  }


};

export const dynamic = "force-dynamic";

export default RecipePageDetail;
