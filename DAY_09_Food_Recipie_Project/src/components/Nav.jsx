import React from 'react'
import {NavLink} from 'react-router-dom'

const Nav = () => {
  return (
    <div className="flex gap-10 mb-5 w-full items-center justify-center">
      {/* Home Link */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-3 py-1 rounded-full text-xl transition-all duration-300 ${
            isActive ? "text-red-400" : "text-white font-semibold"
          }`
        }
      >
        Home
      </NavLink>

      {/* About Link */}
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `px-3 py-1 rounded-full text-xl transition-all duration-300 ${
            isActive ? "text-red-400" : "text-white font-semibold"
          }`
        }
      >
        About
      </NavLink>

      {/* Recipes Link */}
      <NavLink
        to="/recipes"
        className={({ isActive }) =>
          `px-3 py-1 rounded-full text-xl transition-all duration-300 ${
            isActive ? "text-red-400" : "text-white font-semibold"
          }`
        }
      >
        Recipes
      </NavLink>

      {/* Create Recipe Link */}
      <NavLink
        to="/create-recipe"
        className={({ isActive }) =>
          `px-3 py-1 rounded text-xl transition-all duration-300 ${
            isActive ? "text-red-400" : "bg-gray-700 text-white font-semibold"
          }`
        }
      >
        Create Recipe
      </NavLink>
    </div>
  )
}

export default Nav
