import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="flex gap-10 justify-center items-center p-5">
      {/* // We use the Link tag to achieve SPA (Single Page Application)
      functionality. // It helps us navigate between pages without reloading the
      entire website. */}
      <Link className="text-xl font-semibold hover:cursor-pointer hover:text-orange-500 duration-300" to={"/"}>Home</Link>
      <Link className="text-xl font-semibold hover:cursor-pointer hover:text-orange-500 duration-300" to={"/Recipies"}>Recipies</Link>
      <Link className="text-xl font-semibold hover:cursor-pointer hover:text-orange-500 duration-300" to={"/Cook-Book"}>CookBook</Link>
      <Link className="text-xl font-semibold hover:cursor-pointer hover:text-orange-500 duration-300" to={"/Food"}>Food</Link>
    </div>
  );
};

export default Nav;
