import React from "react";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div className="flex gap-10 justify-center items-center p-5">
      {/* // We use the Link tag to achieve SPA (Single Page Application)
      functionality. // It helps us navigate between pages without reloading the
      entire website. */}
      <NavLink
        className={(e) =>
          e.isActive
            ? "text-yellow-600 text-xl font-semibold "
            : "hover:cursor-pointer hover:text-orange-500 duration-300 text-xl font-semibold "
        }
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={(e) =>
          e.isActive
            ? "text-yellow-600 text-xl font-semibold "
            : "hover:cursor-pointer hover:text-orange-500 duration-300 text-xl font-semibold "
        }
        to={"/recipies"}
      >
        Recipies
      </NavLink>
      <NavLink
        className={(e) =>
          e.isActive
            ? "text-yellow-600 text-xl font-semibold "
            : "hover:cursor-pointer hover:text-orange-500 duration-300 text-xl font-semibold "
        }
        to={"/cook-book"}
      >
        CookBook
      </NavLink>
      <NavLink
        className={(e) =>
          e.isActive
            ? "text-yellow-600 text-xl font-semibold "
            : "hover:cursor-pointer hover:text-orange-500 duration-300 text-xl font-semibold "
        }
        to={"/food"}
      >
        Food
      </NavLink>
      <NavLink
        className={(e) =>
          e.isActive
            ? "text-yellow-600 text-xl font-semibold "
            : "hover:cursor-pointer hover:text-orange-500 duration-300 text-xl font-semibold "
        }
        to={"/product"}
      >
        Products
      </NavLink>
    </div>
  );
};

export default Nav;
