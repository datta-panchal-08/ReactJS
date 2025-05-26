import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProductDetails = () => {
    const {name} = useParams();
    const navigate = useNavigate();

  return (
    <div className='flex flex-col gap-2'>
        <h4 className='text-xl font-semibold capitalize'>{name}</h4>
        <p>Product Details....</p>
        <button onClick={()=>navigate(-1)} className='bg-white w-fit text-black px-8 py-1 rounded'>
            Go Back 
        </button>
    </div>
  )
}

export default ProductDetails