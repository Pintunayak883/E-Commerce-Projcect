import React from "react";
import Bdata from "../data/Bdata";
import BlogCard from "../Componts/CardComponts/BlogCard";
import SearchIcon from "@mui/icons-material/Search";
import Chip from "@mui/material/Chip";
import Fdata from "../data/Fdata";
import Cdata from "../data/Cdata";
import Adata from "../data/Adata";
import Tdata from "../data/Tdata";
const Blog = () => {
  return (
    <>
      <div className="relative md:pt-28 pt-16 overflow-hidden">
        <img
          src="images/bg-02.jpg"
          alt=""
          className="min-h-[100%] min-w-[100%]"
        />
        <div className="absolute text-center top-[75px] lg:top-[160px] left-2 w-full ">
          <h3 className="text-['Poppins',Reguler] font-bold text-[25px] lg:text-[50px] text-[#fff]">
            Blog
          </h3>
        </div>
      </div>
      <div className="md:flex justify-between py-10 px-4 sm:px-6 md:px-8 lg:px-32 gap-4">
        <div className="md:max-w-[70%]">
          {Bdata.map((item) => {
            return <BlogCard key={item.id} name={item.name} img={item.img} />;
          })}
        </div>
        <div className="md:max-w-[30%]">
          <div className="m-10 max-w-[90%]">
            <div className="flex items-center justify-center mt-4 min-w-[100%]">
              <input
                type="text"
                className="md:py-3 md:px-8 px-3 outline-none border border-gray-300 rounded-full"
                placeholder="Search..."
              />
            </div>
            <div className="max-w-[100%] my-10">
              <h2 className="text-2xl text-['Poppins',Reguler] font-bold text-[#333333]">
                Categories
              </h2>
              <ul className="mt-5">
                <li className="py-2 border-t border-b border-gray-300 cursor-pointer hover:text-[#717fe0]">
                  Fashion
                </li>
                {Cdata.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className="py-2 border-b border-gray-300 cursor-pointer hover:text-[#717fe0]"
                    >
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="">
              <h3 className="text-2xl text-['Poppins',Regular] font-bold text-[#333333]">
                Featured Products
              </h3>
              <ul className="mt-4">
                {Fdata.map((item) => {
                  return (
                    <li
                      className="flex justify-between items-center gap-4 mt-5"
                      key={item.id}
                    >
                      <div className="relative cursor-pointer">
                        <img
                          src={item.img}
                          alt=""
                          className="max-w-[100%] transition duration-300 hover:opacity-70 "
                        />
                        <div className="absolute  inset-0 bg-[#717fe0] opacity-0 transition-opacity duration-300 hover:opacity-50"></div>
                      </div>
                      <div className="max-w-[100%]">
                        <h2 className="text-[15px] text-['Poppins',Regular] font-semibold text-[#555]">
                          {item.name}
                        </h2>
                        <span className="text-[#888] text-[15px] text-['Poppins',Regular] font-semibold">
                          ${item.price}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mt-16">
              <h3 className="text-2xl text-['Poppins',Regular] font-bold text-[#333333]">
                Archive
              </h3>
              <ul className="mt-4">
                {Adata.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className="flex justify-between items-center mx-1 mt-3 cursor-pointer hover:text-[#717fe0] text-[#888] text-[16px] text-['Poppins',Regular] "
                    >
                      <span>{item.year}</span> <a href="#">({item.num})</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className=" mt-16">
              <h3 className="text-3xl text-['Poppins',Regular] font-bold text-[#333333]">
                Tags
              </h3>
              <div className="mt-5 cursor-pointer  ">
                {Tdata.map((item) => {
                  return (
                    <Chip
                      key={item.id}
                      label={item.name}
                      variant="outlined"
                      className="border hover:border-blue-400 hover:text-blue-400 m-1"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
