import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "../redux/features/wishlist.slice";
import { FiShoppingCart } from "react-icons/fi";
import { addToCart } from "../redux/features/cart.slice"

const Products = ({ data }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.value);
  return (
    <div className="grid container mx-auto lg:grid-cols-5 md:grid-cols-5 grid-cols-2 gap-5">
      {data?.map((product) => (
        <div className="" key={product.id}>
          <div className="relative h-[300px] group overflow-hidden">
            <img src={product.thumbnail} className="w-full" alt="" />

            <button
              onClick={() => dispatch(toggleWishlist(product))}
              className="duration-200 group-hover:right-2 absolute top-2 right-[-30px] text-xl p-2 cursor-pointer rounded-full"
            >
              {wishlist?.some((item) => item.id === product.id) ? (
                <FaHeart className="text-red-500" />
              ) : (
                <FaRegHeart />
              )}
            </button>

            <button onClick={() => dispatch(addToCart(product))} className="duration-200 group-hover:right-2 delay-75 absolute top-11 right-[-30px] text-xl cursor-pointer p-2 rounded-full">
              <FiShoppingCart />
            </button>
          </div>
          <div>
            <h3 className="text-xl font-medium line-clamp-1">
              {product.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
