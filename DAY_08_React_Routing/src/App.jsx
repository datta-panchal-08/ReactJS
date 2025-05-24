import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import Food from "./components/Food";
import CookBook from "./components/CookBook";
import Recipies from "./components/Recipies";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="bg-gray-800 text-white w-screen h-screen">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cook-Book" element={<CookBook />} />
        <Route path="/Recipies" element={<Recipies />} />
        <Route path="/Food" element={<Food />} />
      </Routes>
    </div>
  );
};

export default App;
