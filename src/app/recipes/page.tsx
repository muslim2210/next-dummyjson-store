"use client";
import CatalogCard from '@/components/fragments/CatalogCard';
import Pagination from '@/components/fragments/Pagination';
import Wrapper from '@/components/layouts/Wrapper';
import { LoadingCardCatalog } from '@/components/loading/LoadingCardCatalog';
import { LoadingTitle } from '@/components/loading/LoadingTitle';
import { FilteredDialog } from '@/components/recipes/FilteredDialog';
import { useFetchRecipes } from '@/lib/action/useFetchRecipes';
import { RecipeModel } from '@/types/recipes';
import React, { useMemo, useState } from 'react'

const RecipesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const { data, loading } = useFetchRecipes(
    currentPage,
    itemsPerPage,
  );
  const totalPages = data ? Math.ceil(data.total / itemsPerPage) : 0;
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedMeals, setSelectedMeals] = useState<string[]>([]);

  const allTags = useMemo(() => {
    return [...new Set(data && data.recipes?.flatMap((r) => r.tags))];
  }, [data]);

  const allMeals = useMemo(() => {
    return [...new Set(data && data.recipes?.flatMap((r) => r.mealType))];
  }, [data]);

  const filteredRecipes = useMemo(() => {
    return data?.recipes.filter((recipe) => {
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

    return (
      <Wrapper className="py-5 md:py-10">
        {loading ? (
          <LoadingTitle />
        ) : (
          <div className="text-gray-800 flex flex-col gap-2">
            <h5 className="font-medium text-gray-500 text-base">Carts / Page ({currentPage}) of {totalPages}</h5>
            <h2 className="font-semibold text-gray-700 text-xl md:text-3xl">All Recipes ({data && data.total})</h2>
          </div>
        )}
        <div className='mb-1 md:mb-5'>
          {/* Pagination */}
          {data && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => setCurrentPage(page)}
            />
          )}
        </div>
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
            {Array.from({ length: 8 }).map((_, index) => (
              <LoadingCardCatalog key={index} />
            ))}
          </div>
        ) : (
          <>
            <div className="flex gap-6">
              {/* Sidebar Filter */}
              <div className="w-1/4 p-2 md:p-4 border-r border-gray-200 hidden md:block">
                <h2 className="font-bold mb-2">Filter by Tags</h2>
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
              <div className="flex-1 mt-7 md:mt-0 mb-5 lg:px-7">
                <div className="flex justify-end mb-4">
                  <FilteredDialog
                    allTags={allTags}
                    allMeals={allMeals}
                    selectedTags={selectedTags}
                    selectedMeals={selectedMeals}
                    onTagChange={handleTagChange}
                    onMealChange={handleMealChange}
                  />
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-3 lg:gap-7">
                  {filteredRecipes && filteredRecipes.map((recipe: RecipeModel) => (
                    <CatalogCard key={recipe.id} title={recipe.name} category={recipe.cuisine} id={recipe.id} thumbnail={recipe.image} rating={recipe.rating} href={`/recipes/${recipe.id}`} isRecipe tags={recipe.tags} />
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </Wrapper>
    );
  }

export default RecipesPage
