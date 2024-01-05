import React from "react";
import Sdata from "../../data/Sdata";
import { NavLink } from "react-router-dom";
const Section = () => {
  return (
    <>
      <div className="md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 px-4 sm:px-6 md:px-8 lg:px-32 gap-5">
        {Sdata.map((item, index) => (
          <div
            className="relative h-full w-full my-5 border border-gray-300"
            key={index}
          >
            <img
              src={item.img}
              className="w-full h-full object-cover transition duration-300 hover:opacity-70"
              alt=""
            />
            <div className="absolute inset-0 bg-[#717fe0] opacity-0 flex items-end justify-center transition-opacity duration-300 hover:opacity-70">
              <button className="text-[#ffffff] font-bold border-b-2 border-white mb-5 p-2">
                <span className="opacity-100">
                  <NavLink to="/shop">Shop Now</NavLink>
                </span>
              </button>
            </div>
            <div className="absolute top-4 left-4">
              <h2 className="md:text-2xl text-lg text-['Poppins',Reguler] font-bold">
                {item.name}
              </h2>
              <p className="md:text-sm text-xs text-['Poppins',Reguler] font-semibold text-[#555]">
                {item.dsc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Section;
