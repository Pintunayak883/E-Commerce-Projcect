import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <>
      <footer className="h-[auto] bg-[#222222] min-w-[100%] mt-12 text-white px-4 sm:px-6 md:px-8 lg:px-32 ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[25px] py-14  list-none">
          <div className="">
            <h3 className="text-base font-bold font-['Montserrat', sans-serif]">
              CATEGORIES
            </h3>
            <ul className="py-4 text-[15px] text-[#b2b2b2] text-['Poppins',Reguler] ">
              <li className="py-2 cursor-pointer hover:text-[#717fe0]">
                Women
              </li>
              <li className="py-2 cursor-pointer hover:text-[#717fe0]">Men</li>
              <li className="py-2 cursor-pointer hover:text-[#717fe0]">
                Shoes
              </li>
              <li className="py-2 cursor-pointer hover:text-[#717fe0]">
                Watches
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-base font-bold font-['Montserrat', sans-serif]">
              HELP
            </h3>
            <ul className="py-4 text-[15px] text-[#b2b2b2] text-['Poppins',Reguler]">
              <li className="py-2 cursor-pointer hover:text-[#717fe0]">
                Track Order
              </li>
              <li className="py-2 cursor-pointer hover:text-[#717fe0]">
                Returns
              </li>
              <li className="py-2 cursor-pointer hover:text-[#717fe0]">
                Shipping
              </li>
              <li className="py-2 cursor-pointer hover:text-[#717fe0]">FAQs</li>
            </ul>
          </div>
          <div className="max-w-52">
            <h4 className="text-base font-bold font-['Montserrat', sans-serif]">
              GET IN TOUCH
            </h4>
            <p className="py-4 text-[15px] text-[#b2b2b2] text-['Poppins',Reguler]">
              Any questions? Let us know in store at 8th floor, 379 Hudson St,
              New York, NY 10018 or call us on (+1) 96 716 6879
            </p>
            <div className="py-4 text-[15px] text-[#b2b2b2] text-['Poppins',Reguler] flex gap-4 cursor-pointer">
              <InstagramIcon className="hover:text-[#717fe0]" />
              <PinterestIcon className="hover:text-[#717fe0]" />
              <LinkedInIcon className="hover:text-[#717fe0]" />
            </div>
          </div>
          <div className="max-w-56">
            <h4 className="text-base font-bold font-['Montserrat', sans-serif]">
              NEWSLETTER
            </h4>
            <input
              type="text"
              placeholder="email@example.com"
              className="max-w-[100%] py-4 text-[15px] text-[#b2b2b2] text-['Poppins',Reguler] bg-transparent outline-none border-b border-[#717FE0]"
            />
            <div className="">
              <button className="md:py-2 mt-5 text-['Poppins',Reguler] px-5 font-bold lg:w-[161px] lg:h-[46px] text-[15px] bg-[#717fe0] text-white rounded-full hover:bg-white hover:text-[#717fe0]">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-col">
          <div className="flex gap-1">
            <img
              src="images/icon-pay-01.png"
              alt=""
              className="max-w-full cursor-pointer"
            />
            <img
              src="images/icon-pay-02.png"
              alt=""
              className="max-w-full cursor-pointer"
            />
            <img
              src="images/icon-pay-03.png"
              alt=""
              className="max-w-full cursor-pointer"
            />
            <img
              src="images/icon-pay-04.png"
              alt=""
              className="max-w-full cursor-pointer"
            />
            <img
              src="images/icon-pay-05.png"
              alt=""
              className="max-w-full cursor-pointer"
            />
          </div>
          <p className="pt-5 pb-8 md:text-[16px] text-center  text-['Poppins',Reguler] text-[#888888] ">
            Copyright ©2023 All rights reserved | This template is made with by
            <span className="cursor-pointer text-[#717fe0] hover:text-[#38407e]">
              {" "}
              Nayak
            </span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
