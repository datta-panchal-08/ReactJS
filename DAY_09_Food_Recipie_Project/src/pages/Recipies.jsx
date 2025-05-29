import React, { useContext, useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import { categories, recipesData } from '../data';
import { recipecontext } from '../context/RecipeContext';
import { useLocation } from 'react-router-dom';

const Recipies = () => {
  const { data, setdata } = useContext(recipecontext);
  const [category, setCategory] = useState("Beverages");

useEffect(() => {
  const filteredData = recipesData.filter((item) => item.category === category);
  setdata(filteredData);
}, [category]);

  return (
    <div className='flex flex-col w-full h-full'>
      <div className="w-full gap-10 flex flex-wrap justify-center my-4">
        {categories?.map((cat, index) => (
          <span
            onClick={() => setCategory(cat)}
            key={index}
            className={`font-semibold cursor-pointer bg-white w-fit rounded-full px-4 py-1 text-black ${category === cat ? 'bg-yellow-300' : ''}`}
          >
            {cat}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap w-full justify-between ">
        {data?.length > 0 ? (
          data.map((item, index) => (
            <RecipeCard key={item.id} recipe={item} />
          ))
        ) : (
          <p className="text-gray-600">No recipes found for "{category}"</p>
        )}
      </div>
    </div>
  );
};

export default Recipies;
