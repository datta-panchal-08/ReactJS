import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Recipies from '../pages/Recipies'
import Create from '../pages/Create'
import RecipeDetails from '../pages/RecipeDetails'

const Mainroutes = () => {
  return (
    <div>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/recipe/detail/:id' element={<RecipeDetails/>}/>
          <Route path='/recipes' element={<Recipies/>}/>
          <Route path='/create-recipe' element={<Create/>}/>
          <Route path='/recipe/update/:id' element={<Create/>}/>

       </Routes>

    </div>

  )
}

export default Mainroutes