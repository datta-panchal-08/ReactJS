import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "../components/Home";
import Food from "../components/Food";
import CookBook from "../components/CookBook";
import Recipies from "../components/Recipies";
import ProductDetails from "../components/ProductDetails";
import Products from "../components/Products";
const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cook-book" element={<CookBook />} />
        <Route path="/recipies" element={<Recipies />} />
        <Route path="/food" element={<Food />} />
        <Route path="/product" element={<Products/>}>
         <Route path="/product/detail/:name" element={<ProductDetails/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
