import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { amountDecrement, amountIncrement } from "../redux/features/cart.slice";

const Cart = () => {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch()
  console.log(cart);
  return (
    <div className="container mx-auto">
      <p>Cart</p>
      <div className="flex gap-5">

      <div className="flex-1">
        {cart?.map((product) => (
          <div className="border-b border-gray-300 flex gap-7" key={product.id}>
            <img src={product.thumbnail} className="w-24" alt="" />
            <div className="space-y-2">
              <h3>{product.title}</h3>
              <strong>{product.price} USD</strong>
              <div>
                <button disabled={product.amount <= 1} onClick={()=> dispatch(amountDecrement(product))} className="size-6 bg-slate-300 cursor-pointer active:bg-slate-500">-</button>
                <span className="px-2">{product.amount}</span>
                <button onClick={()=> dispatch(amountIncrement(product))} className="size-6 bg-slate-300 cursor-pointer active:bg-slate-500">+</button>
              </div>
              <button className="px-3 bg-slate-300">delete</button>
            </div>
          </div>
        ))}
      </div>


      <div className="w-[300px] min-h-72 border p-4">
        <p>total price: {cart?.reduce((sum, item) => sum + item.price * item.amount, 0)}</p>
      </div>


      </div>
    </div>
  );
};

export default Cart;
