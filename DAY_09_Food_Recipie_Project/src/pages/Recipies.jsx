import React, { useContext, useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import { categories, recipesData } from '../data';
import { recipecontext } from '../context/RecipeContext';
import { useLocation } from 'react-router-dom';

const Recipies = () => {
 const {data} = useContext(recipecontext);
  return (
    <div className='flex flex-wrap justify-between gap-4'>
      {
        data && data?.map((recipe)=>{
          return <RecipeCard recipe={recipe} key={recipe.id}/>
        })
      }

    </div>
  )
};

export default Recipies;
