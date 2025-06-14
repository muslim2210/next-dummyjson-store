"use client";
import CatalogCard from '@/components/fragments/CatalogCard';
import LoadingSpinner from '@/components/fragments/LoadingSpinner';
import Wrapper from '@/components/layouts/Wrapper';
import { useFetchRecipes } from '@/lib/action/useFetchRecipes';
import { RecipeModel } from '@/types/recipes';
import React, { useMemo, useState } from 'react'

const RecipesPage = () => {
  const { data, loading, error } = useFetchRecipes();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedMeals, setSelectedMeals] = useState<string[]>([]);

  const allTags = useMemo(() => {
    return [...new Set(data.flatMap((r) => r.tags))];
  }, [data]);

  const allMeals = useMemo(() => {
    return [...new Set(data.flatMap((r) => r.mealType))];
  }, [data]);

  const filteredRecipes = useMemo(() => {
    return data.filter((recipe) => {
      const matchTags =
        selectedTags.length === 0 || selectedTags.some((tag) => recipe.tags.includes(tag));
      const matchMeals =
        selectedMeals.length === 0 || selectedMeals.some((meal) => recipe.mealType.includes(meal));
      return matchTags && matchMeals;
    });
  }, [data, selectedTags, selectedMeals]);

  const handleTagChange = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleMealChange = (meal: string) => {
    setSelectedMeals((prev) =>
      prev.includes(meal) ? prev.filter((m) => m !== meal) : [...prev, meal]
    );
  };

  if (error) return <p>{error.message}</p>;
  if (loading) {
    return (
      <LoadingSpinner />
    )
  } else {
    console.log("filter recipes",filteredRecipes);
    console.log("data meals",allMeals);
    console.log("data tags",allTags); 
    return (
    <Wrapper>
      <div className="flex gap-6">
        {/* Sidebar Filter */}
        <div className="w-1/4 p-2 md:p-4 border-r border-gray-200 hidden md:block">
          <h2 className="font-bold mb-2 mt-5">Filter by Tags</h2>
          <div className="mb-4 grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-2">
            {allTags.map((tag) => (
              <label key={tag} className="block mb-1 cursor-pointer text-gray-700 font-thin">
                <input
                  type="checkbox"
                  checked={selectedTags.includes(tag)}
                  onChange={() => handleTagChange(tag)}
                  className="mr-2 cursor-pointer"
                />
                {tag}
              </label>
            ))}
          </div>

          <h2 className="font-bold mt-4 mb-2">Filter by Meal</h2>
          <div className="mb-4 grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-1">
            {allMeals.map((meal) => (
              <label key={meal} className="block mb-1 cursor-pointer text-gray-700 font-thin">
                <input
                  type="checkbox"
                  checked={selectedMeals.includes(meal)}
                  onChange={() => handleMealChange(meal)}
                  className="mr-2 cursor-pointer"
                />
                {meal}
              </label>
            ))}
          </div>
        </div>

        {/* Recipes List */}
        <div className="flex-1 mt-10 mb-5">
          <h1 className="text-xl font-bold mb-4">
            Total Recipes: {filteredRecipes.length}
          </h1>
          <div className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-3 lg:gap-7">
            {filteredRecipes.map((recipe: RecipeModel) => (
              <CatalogCard key={recipe.id} title={recipe.name} category={recipe.cuisine} id={recipe.id} thumbnail={recipe.image} rating={recipe.rating} href={`/recipes/${recipe.id}`} isRecipe tags={recipe.tags} />
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
  }
}

export default RecipesPage
