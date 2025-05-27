import React from "react";

const RecipeCard = ({ recipe }) => {

  return (
    recipe && (
      <div className="w-[28%] px-2 py-2 shadow-lg relative shadow-black mt-10 h-fit bg-white rounded-xl text-black">
        <div className="img-containershadow-black shadow-lg absolute overflow-hidden top-[-10%] right-[-13%] z-50 w-[13vh] border-3  border-blue-600 h-[13vh] rounded-full">
          <img className="w-full h-full object-cover" src={recipe?.imageUrl} />
        </div>
        <div className="title flex flex-col gap-2">
          <h4 className="w-[55%] tracking-tight leading-4 font-semibold">
            {recipe?.title}
          </h4>
          <span className="w-fit px-3 font-semibold py-0.5 mb-1 text-xs rounded-full bg-sky-200">
            {recipe?.category}
          </span>
          <p className="mt-1 tracking-tight leading-4 font-semibold text-sm">
            {recipe?.description.slice(0,105)} ...
            </p>

          <h5 className="text-red-500 font-semibold">Price : <span className="text-green-400">{recipe?.price}</span></h5> 

        </div>
      </div>
    )
  );
};

export default RecipeCard;
