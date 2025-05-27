import React, { useContext } from 'react'
import { recipecontext } from '../context/RecipeContext'
import RecipeCard from '../components/RecipeCard';
import { useEffect } from 'react';
import { recipesData } from '../data';
import { useLocation } from 'react-router-dom';

const Home = () => {
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
}

export default Home