import React, { createContext, useEffect, useState } from "react";
import {recipesData} from '../data.js'
export const recipecontext = createContext(null);

const RecipeContext = ({ children }) => {

 const [data, setdata] = useState(recipesData);
useEffect(() => {
  setdata(recipesData); 
}, [recipesData]);

  return (
    <recipecontext.Provider value={{ data, setdata }}>
      {children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;
