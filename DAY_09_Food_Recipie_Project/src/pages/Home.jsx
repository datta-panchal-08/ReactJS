import React, { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";
import { useEffect } from "react";
import { recipesData } from "../data";
import { useLocation } from "react-router-dom";
import instance from "../utils/axios";

const Home = () => {
  const productHandler = async () => {
    const res = await instance.get("/products");
    console.log(res);
  };

  useEffect(() => {
    console.log("Home.jsx mounted");
    productHandler();
    return () => {
      console.log("Home.jsx unmounted");
    };
  },[]);

  return (
    <div>
      <button
        onClick={productHandler}
        className="px-4 py-1 rounded-md bg-green-600 text-white font-semibold"
      >
        Get Products
      </button>
    </div>
  );
};

export default Home;
