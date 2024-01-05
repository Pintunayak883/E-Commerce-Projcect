import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const BlogCard = ({ img, name }) => {
  return (
    <>
      <div className="mt-5">
        <div class="max-w-full max-h-full overflow-hidden">
          <img
            src={img}
            alt=""
            class="transform transition-transform hover:scale-110 duration-500"
          />
        </div>

        <div className="py-5">
          <h4 className="py-2 text-['Poppins',Reguler] text-[26px] font-bold text-[#000000] cursor-pointer hover:text-[#717FE0]">
            {name}
          </h4>
          <p className="text-[#666666] py-2 text-[16px] font-semibold">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae
            sapien eu varius
          </p>
          <div className="flex flex-wrap text-[15px] justify-between text-[#333333] font-semibold text-['Poppins',Reguler]">
            <span>
              <span className="border-r-2 border-slate-300 px-2">By Admin</span>
              <span className="border-r-2 border-slate-300 px-2">
                StreetStyle, Fashion, Couple
              </span>
              <span className="border-r border-slate-100 px-2">8 Comments</span>
            </span>
            <button className="outline-none border-none md:mt-0 mt-3 text-center">
              CONTINUE READING{" "}
              <span>
                <ArrowRightAltIcon />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
