import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCatgory } from "../../redux/Slice/CatgorySlice";
import { setSearch } from "../../redux/Slice/SearchSlice";
import Pdata from "../../data/Pdata";
const Catgorymenu = () => {
  const [catgories, setcatgories] = useState([]);
  const dispatch = useDispatch();
  const Category = useSelector((state) => state.category.Category);
  const fecthCatgory = () => {
    const newCatgory = [...new Set(Pdata.map((item) => item.category))];
    setcatgories(newCatgory);
  };

  useEffect(() => {
    fecthCatgory();
  }, []);

  return (
    <>
      <h1 className="text-xl md:text-[36px] text-['Poppins',Reguler] font-bold">
        PRODUCT OVERVIEW
      </h1>
      <div className="md:flex justify-between">
        <ul className="flex lg:overflow-x-hidden overflow-x-scroll scroll-smooth gap-6 mt-5 text-[#555] font-semibold cursor-pointer">
          <li
            onClick={() => dispatch(setCatgory("All Products"))}
            className={`border-b border-transparent hover:border-[#555] ${
              Category === "All Products" && "text-[#717fea]"
            }`}
          >
            All
          </li>
          {catgories.map((c, index) => {
            return (
              <li
                key={index}
                onClick={() => dispatch(setCatgory(c))}
                className={`border-b border-transparent hover:border-[#555] ${
                  Category === c && "text-[#717fea]"
                }`}
              >
                {c}
              </li>
            );
          })}
        </ul>
        <div className="" id="search">
          <input
            onChange={(e) => dispatch(setSearch(e.target.value))}
            type="search"
            placeholder="Search..."
            className="outline-none border border-[#555] px-5 py-2 rounded-md mt-5 w-full"
          />
        </div>
      </div>
    </>
  );
};

export default Catgorymenu;
