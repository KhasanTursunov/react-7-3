import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { amountDecrement, amountIncrement } from "../redux/features/cart.slice";

const Cart = () => {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch()
  console.log(cart);
  const dateToday = new Date();
  return (
    <div className="container mx-auto p-7 ">
      <div className="flex gap-12 ">
        <div className="flex-1 ">
          {cart?.map((product) => (
            <div
              className="border-b border-gray-300 flex gap-12 "
              key={product.id}
            >
          
              <img src={product.thumbnail} className="w-24" alt="" />
              <div className="space-y-2 ">
                <h3 className="text-red-500 text-xl">{product.title}</h3>
                <h3 className="text-blue-400 text-xl line-clamp-1">
                  {product.description}
                </h3>
                <strong className="text-blue-500">{product.price} USD</strong>
                <div className="flex">
                  <button
                    disabled={product.amount <= 1}
                    onClick={() => dispatch(amountDecrement(product))}
                    className="size-6 text-white bg-blue-400 rounded-sm cursor-pointer active:bg-slate-500"
                  >
                    -
                  </button>
                  <span className="px-2">{product.amount}</span>
                  <button
                    onClick={() => dispatch(amountIncrement(product))}
                    className="size-6 text-white bg-blue-400 rounded-sm cursor-pointer active:bg-slate-500"
                  >
                    +
                  </button>
                </div>
                <button className="px-3 text-white bg-blue-500 rounded-sm mb-5">
                  delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* total price */}
        <div className="w-[300px] min-h-72 border p-4 rounded-2xl flex flex-col gap-4">
          <h3>Buyurtmangiz:</h3>
          <div className="">
            <p>
              Buyurtmangiz soni: (
              <bold className="text-blue-500">
                {cart?.reduce((sum, item) => sum + item.amount, 0)}
              </bold>
              )
            </p>
            <p>
              Jami:{" "}
              <strong className="text-xl text-blue-500">
                {cart
                  ?.reduce((sum, item) => sum + item.price * item.amount, 0)
                  .toFixed(2)}{" "}
              </strong>
              so'm
            </p>
          </div>
          <h3>
            Yetkazib beramiz{" "}
            <bold className="text-xl text-blue-600">
              {dateToday.toLocaleDateString()}
            </bold>{" "}
            dan
          </h3>
          <div>
            <button className="p-4 bg-blue-500 cursor-pointer rounded-2xl text-white active:bg-blue-600">
              Rasmiylashtirishga o'tish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
