import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { recipesData } from "../data";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { FaHeart, FaRegHeart } from "react-icons/fa";
const RecipeDetails = () => {
  const { data, setdata } = useContext(recipecontext);
  const [visible, setVisible] = useState(false);
  const [favorite, setfavorite] = useState(JSON.parse(localStorage.getItem("fav")) || []);
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = data?.find((rec) => rec.id == id);

  const deleteHandler = (id) => {
    let favdata = JSON.parse(localStorage.getItem("fav"));
    let filterfav = favdata.filter((item)=> item.id !== id);
    setfavorite(filterfav);
    localStorage.setItem("fav",JSON.stringify(filterfav));
    let filterddata = data?.filter((item) => {
      return item.id !== id;
    });    

    setdata(filterddata);
    localStorage.setItem("recipes", JSON.stringify(filterddata));
    toast.success("Deleted!");
    navigate("/recipes");
  };

    useEffect(()=>{
      console.log("recipe mounted");

      return () =>{
        console.log("recipe unmounted");
      }

    },[favorite])


  const likeHandler = () => {
    const copyfav = [...favorite];
    copyfav.push(recipe);
    setfavorite(copyfav);
    localStorage.setItem("fav", JSON.stringify(copyfav));
  };

  const dislikeHandler = () => {
    let favdata = favorite.filter((item)=>item.id !== recipe?.id);
    setfavorite(favdata);
    localStorage.setItem("fav", JSON.stringify(favdata));
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: recipe?.title,
      imageUrl: recipe?.imageUrl,
      description: recipe?.description,
      ingrediants: recipe?.ingrediants,
      price: recipe?.price,
      category: recipe?.category,
      instructions: recipe?.instructions,
    },
  });

  const submitHandler = (recipe) => {
    const index = data?.findIndex((rec) => rec.id == id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...recipe };
    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("Recipe Updated!");
    navigate("/recipes");
  };

  return (
    <>
      {!visible ? (
        <div className="grid grid-cols-1  gap-3 md:grid-cols-1 lg:mt-10 lg:grid-cols-2 xl:grid-cols-2">
          <div className="overflow-hidden">
            <img
              className="rounded-2xl w-full h-[80vh] object-cover"
              src={recipe?.imageUrl}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-xl text-nowrap flex items-center gap-2 md:text-2xl lg:text-[39px]">
              {recipe?.title}
              <span className="text-xs md:text-sm lg:text-sm bg-red-500 px-2 rounded-md py-0.5">
                {recipe?.category}
              </span>
              <span className="ml-3">
                {favorite?.find((item)=> item?.id == recipe?.id) ? (
                  <FaHeart
                    onClick={dislikeHandler}
                    className="text-2xl text-red-500 cursor-pointer"
                  />
                ) : (
                  <FaRegHeart
                    onClick={likeHandler}
                    className="text-2xl cursor-pointer"
                  />
                )}
              </span>
            </h1>

            <div className="flex flex-col gap-2">
              <p className="text-sm md:text-sm lg:text-[18px] leading-5">
                {recipe?.description}
              </p>
              <div className="flex flex-col gap-2">
                <h5 className="text-sm md:text-xl lg:text-2xl">Ingredients</h5>
                <div className="flex flex-wrap gap-3 items-center">
                  {recipe?.ingrediants?.split(",")?.map((ing, i) => {
                    return (
                      <span
                        className="bg-gray-100 font-semibold rounded-full px-2 py-1 text-blue-500"
                        key={i}
                      >
                        {ing}
                      </span>
                    );
                  })}
                </div>
                <h5 className="text-sm md:text-xl lg:text-2xl">Instructions</h5>
                <div className="flex flex-col gap-1 ">
                  {recipe?.instructions?.split(",")?.map((ins, i) => {
                    return (
                      <span
                        className="text-[15px] font-semibold text-blue-200"
                        key={i}
                      >
                        {i + 1}. {ins}.
                      </span>
                    );
                  })}
                </div>
                <h5 className="text-2xl font-semibold text-red-400">
                  PRICE -|
                  <span className="text-xl font-bold text-green-400">
                    ₹{recipe?.price}
                  </span>
                </h5>
                <div className="flex mt-1 gap-5 items-center">
                  <button
                    onClick={() => setVisible(true)}
                    className="px-4 py-1 rounded-md bg-green-500 cursor-pointer text-white font-semibold"
                  >
                    Update Recipe
                  </button>
                  <button
                    onClick={() => deleteHandler(recipe?.id)}
                    className="px-4 py-1 rounded-md bg-red-500 cursor-pointer text-white font-semibold"
                  >
                    Delete Recipe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full text-black flex items-center justify-center">
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="bg-white shadow-black rounded w-screen py-4 px-8 shadow-lg"
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
                  <small className="text-red-400">
                    {errors?.title?.message}
                  </small>
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
                  <small className="text-red-400">
                    {errors?.category?.message}
                  </small>
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
                  <small className="text-red-400">
                    {errors?.description?.message}
                  </small>
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
                  <small className="text-red-400">
                    {errors?.imageUrl?.message}
                  </small>
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
                  <small className="text-red-400">
                    {errors?.price?.message}
                  </small>
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
                  <small className="text-red-400">
                    {errors?.ingrediants?.message}
                  </small>
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
                <small className="text-red-400">
                  {errors?.instructions?.message}
                </small>
              )}
            </div>

            {/* Save Recipe Button */}
            <div className="mt-6 text-center">
              <button
                type="submit"
                className="text-white px-6 py-2 cursor-pointer rounded bg-green-600 font-semibold"
              >
                Update Recipe
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default RecipeDetails;
