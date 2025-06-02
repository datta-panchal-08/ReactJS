import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { recipecontext } from "../context/RecipeContext";
import {toast} from 'react-toastify'
const Create = () => {
  const { data, setdata } = useContext(recipecontext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (recipe) => {    
    recipe.id = nanoid();
    const copydata = [...data];
    copydata.push(recipe);
    setdata(copydata);
    localStorage.setItem("recipes",JSON.stringify(copydata));
    toast.success("new recipe created");
    reset();
    navigate("/recipes");
  };

  return (
    <div className="w-full text-black flex justify-center">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="bg-white shadow-black rounded w-[60%] py-4 px-8 shadow-lg"
      >
        <div className="grid grid-cols-2 gap-6">
          {/* Title */}
          <div className="form-input flex flex-col">
            <h5 className="text-lg">Title</h5>
            <input
              className="px-4 py-1 placeholder:text-zinc-350 placeholder:font-semibold rounded-md border border-zinc-300 outline-none"
              {...register("title", { required: "Title cannot be empty" })}
              type="text"
              placeholder="Recipe Title"
            />
            {errors?.title?.message && (
              <small className="text-red-400">{errors?.title?.message}</small>
            )}
          </div>

          {/* Category */}
          <div className="form-input flex flex-col">
            <h5 className="text-lg">Category</h5>
            <select
              className="px-4 py-1 rounded-md border border-zinc-300 outline-none"
              {...register("category", {
                required: "Please select a category",
              })}
              defaultValue=""
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="Vegetarian">Vegetarian </option>
                  <option value="Vegan">Vegan</option>
                  <option value="Dessert">Dessert </option>
            </select>
            {errors?.category?.message && (
              <small className="text-red-400">{errors?.category?.message}</small>
            )}
          </div>

          {/* Description */}
          <div className="form-input flex flex-col">
            <h5 className="text-lg">Description</h5>
            <input
              className="px-4 py-1 rounded-md border border-zinc-300 outline-none"
              {...register("description", {
                required: "Description cannot be empty",
              })}
              type="text"
              placeholder="Recipe description"
            />
            {errors?.description?.message && (
              <small className="text-red-400">{errors?.description?.message}</small>
            )}
          </div>

          {/* Image URL */}
          <div className="form-input flex flex-col">
            <h5 className="text-lg">Image URL</h5>
            <input
              className="px-4 py-1 rounded-md border border-zinc-300 outline-none"
              {...register("imageUrl", {
                required: "Image URL cannot be empty",
              })}
              type="url"
              placeholder="Recipe image URL"
            />
            {errors?.imageUrl?.message && (
              <small className="text-red-400">{errors?.imageUrl?.message}</small>
            )}
          </div>
        </div>

        {/* Price and Ingredients */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          {/* Price */}
          <div className="form-input flex flex-col">
            <h5 className="text-lg">Price</h5>
            <input
              className="px-4 py-1 rounded-md border border-zinc-300 outline-none"
              {...register("price", { required: "Price cannot be empty" })}
              type="number"
              placeholder="Recipe Price"
            />
            {errors?.price?.message && (
              <small className="text-red-400">{errors?.price?.message}</small>
            )}
          </div>

          {/* Ingredients */}
          <div className="form-input flex flex-col col-span-2">
            <h5 className="text-lg">Ingredients</h5>
            <textarea
              className="px-4 py-1 resize-none rounded-md border border-zinc-300 outline-none"
              {...register("ingrediants", {
                required: "Ingredients cannot be empty",
              })}
              placeholder="Write ingredients, comma separated"
            ></textarea>
            {errors?.ingrediants?.message && (
              <small className="text-red-400">{errors?.ingrediants?.message}</small>
            )}
          </div>
        </div>

        {/* Instructions */}
        <div className="form-input flex flex-col mt-4">
          <h5 className="text-lg">Instructions</h5>
          <textarea
            className="px-4 py-1 resize-none rounded-md border border-zinc-300 outline-none"
            {...register("instructions", {
              required: "Instructions cannot be empty",
            })}
            placeholder="Write instructions"
          ></textarea>
          {errors?.instructions?.message && (
            <small className="text-red-400">{errors?.instructions?.message}</small>
          )}
        </div>

        {/* Save Recipe Button */}
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="text-white px-6 py-2 cursor-pointer rounded bg-green-600 font-semibold"
          >
            Save Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
