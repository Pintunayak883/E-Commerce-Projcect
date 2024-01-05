import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ItemCart from "./ItemCart";
import { RemoveAllItem } from "../../redux/Slice/CartSlice";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
const Cart = () => {
  const dispatch = useDispatch();
  const [activeCart, setActiveCart] = useState(false);
  const Cart = useSelector((state) => state.cart.cart);
  const TotalQty = Cart.reduce((TotalQty, item) => TotalQty + item.qty, 0);
  const TotalPrice = Cart.reduce(
    (TotalPrice, item) => TotalPrice + item.qty * item.price,
    0
  ).toFixed(2);
  return (
    <>
      <div
        className={`fixed right-0 top-0 min-w-[100%] lg:min-w-[22%] min-h-[100%] p-5 bg-white mb-3 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-800">My Order</span>
          <CloseIcon
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
            onClick={() => setActiveCart(!activeCart)}
          />
        </div>
        {TotalQty === 0 ? (
          <div className="flex items-center justify-center  h-[80vh]">
            <img src="images/empty-cart.png" alt="" className="min-w-[100%]" />
          </div>
        ) : (
          <>
            {Cart.map((item) => {
              return (
                <ItemCart
                  key={item.id}
                  img={item.img}
                  name={item.name}
                  price={item.price}
                  qty={item.qty}
                  id={item.id}
                />
              );
            })}
            <div className="absolute bottom-0">
              <h3 className="font-semibold text-gray-800">Items: {TotalQty}</h3>
              <h3 className="font-semibold text-gray-800">
                Total Amount: {TotalPrice}$
              </h3>
              <hr className="w-[90vw] lg:[18vw] my-2" />
              <NavLink to="/order">
                <button
                  onClick={() => dispatch(RemoveAllItem())}
                  className="bg-[#717fe0] hover:bg-black duration-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5"
                >
                  Checkout
                </button>
              </NavLink>
            </div>
          </>
        )}
      </div>
      <div
        onClick={() => setActiveCart(!activeCart)}
        className={`w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[#717fea] text-white shadow-lg  p-3 fixed bottom-4 right-5 text-5xl hover:bg-black z-40 cursor-pointer ${
          TotalQty > 0 && "animate-bounce delay-500 transition-all"
        }`}
      >
        <ShoppingCartIcon className="" />
      </div>
    </>
  );
};

export default Cart;
