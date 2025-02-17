import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "../redux/features/wishlist.slice";

const Products = ({ data }) => {
  const dispatch =  useDispatch()
  const wishlist = useSelector(state => state.wishlist.value)
  return (
    <div className="grid container mx-auto grid-cols-5 gap-5">
      {data?.map((product) => (
        <div className="" key={product.id}>
          <div className="relative h-[300px]">
            <img src={product.thumbnail} className="w-full" alt="" />

            <button onClick={()=> dispatch(toggleWishlist(product))} className="absolute top-2 right-2 text-xl p-2 cursor-pointer rounded-full">
              {
                wishlist?.some(item => item.id === product.id) ? 
                <FaHeart className="text-red-500" />
                :  
                <FaRegHeart />
              }
            </button>
          </div>
          <div>
            <h3 className="text-xl font-medium line-clamp-1">{product.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
