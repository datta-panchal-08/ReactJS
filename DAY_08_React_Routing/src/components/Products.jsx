import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const productHandler = (name) =>{
    navigate(`/product/detail/${name}`);
  }

  return (
    <div className="flex flex-col gap-5">

      <div className="product flex flex-col gap-2">
        <h1 className="text-2xl text-white font-semibold">Product 1</h1>
        <button onClick={()=>productHandler("product 1")} className="px-4 w-fit py-1 cursor-pointer rounded text-black font-semibold bg-white">
          See Product
        </button>
      </div>

      <div className="product flex flex-col gap-2">
        <h1 className="text-2xl text-white font-semibold">Product 2</h1>
         <button onClick={()=>productHandler("product 2")}  className="px-4 w-fit py-1 cursor-pointer rounded text-black font-semibold bg-white">
          See Product
        </button>
      </div>

      <div className="product flex flex-col gap-2">
        <h1 className="text-2xl text-white font-semibold">Product 3</h1>
       <button onClick={()=>productHandler("product 3")}  className="px-4 w-fit py-1 cursor-pointer rounded text-black font-semibold bg-white">
          See Product
        </button>
      </div>
       <hr className="w-full h-1 text-white"/>
         
        <Outlet/> 

    </div>
  );
};

export default Products;
