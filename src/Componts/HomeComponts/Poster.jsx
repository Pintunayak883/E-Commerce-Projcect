import React from "react";

const Poster = () => {
  return (
    <>
      <div className="md:pt-0 pt-16 relative w-full overflow-hidden">
        <img
          src="images/slide-01.jpg"
          alt=""
          className="max-h-[80vh] w-full object-cover"
        />
        <div className="absolute top-[80px] lg:top-[220px] left-6 lg:left-36 w-full ">
          <h3 className="text-['Poppins',Reguler] text-[18px] lg:text-[28px] text-[#333]">
            Women Collection 2024
          </h3>
          <h1 className="md:py-2 text-['Playfair Display', serif] font-bold text-2xl lg:text-[60px] mt-2">
            NEW SEASON
          </h1>
          <button className="md:py-2 mt-5 text-['Poppins',Reguler] px-5 font-bold lg:w-[161px] lg:h-[46px] text-[15px] bg-[#717fe0] text-white rounded-full hover:bg-black">
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Poster;
