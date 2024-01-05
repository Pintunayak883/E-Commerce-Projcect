import React from "react";
import { NavLink } from "react-router-dom";

const Order = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-10 mx-auto max-h-[100vh]">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/order-confirmed-7464607-6110040.png?f=webp"
          alt=""
        />
        <NavLink to="/">
          <button className="md:py-2 py-3 mt-5 text-[Poppins,Regular] px-5 font-bold text-[15px] bg-[#717fe0] text-white rounded-full hover:bg-black">
            Continue Shopping
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default Order;
