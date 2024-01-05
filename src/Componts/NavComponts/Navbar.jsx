import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [toggle, setToggle] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const handleScroll = () => {
      if (isMounted) {
        const scrolled = window.scrollY > 0;
        setIsScrolled(scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      isMounted = false;
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth <= 767); // Adjust the breakpoint as needed
    };

    // Initial check on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuClick = () => {
    setToggle(!toggle);
  };

  const handleNavLinkClick = () => {
    // Close the mobile menu when a NavLink is clicked
    setToggle(true);
  };

  return (
    <>
      <nav
        className={`fixed z-50 flex items-center justify-between md:px-10 px-8 py-6 cursor-pointer min-w-[100%] ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="uppercase md:text-2xl text-xl font-semibold">
          <NavLink to="/">
            <span className="font-bold">coza</span> Store
          </NavLink>
        </div>
        <ul
          className={`hidden md:flex items-center gap-4 font-semibold ${
            isLargeScreen ? "lg:block" : "hidden"
          }`}
        >
          <li className="hover:text-[#717FE0]">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hover:text-[#717FE0]">
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li className="hover:text-[#717FE0]">
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li className="hover:text-[#717FE0]">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="hover:text-[#717FE0]">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>

        <div className="flex gap-4 px-2">
          <a href="#search" className="scroll-smooth">
            {" "}
            <SearchIcon className="text-5xl hover:text-[#717FE0]" />
          </a>
          {/* Conditionally render the MenuIcon based on screen size */}
          {isLargeScreen && (
            <MenuIcon className="text-5xl" onClick={handleMenuClick} />
          )}
        </div>
      </nav>
      {/* For Mobile Devices */}
      <ul
        className={`fixed z-40 md:hidden bg-[#717FE0] min-w-[100%] items-center pt-[80px] text-white p-5 h-[auto] font-semibold ${
          toggle ? "hidden" : "block"
        }`}
      >
        <li className="py-2">
          <NavLink to="/" onClick={handleNavLinkClick}>
            Home
          </NavLink>
        </li>
        <li className="py-2">
          <NavLink to="/shop" onClick={handleNavLinkClick}>
            Shop
          </NavLink>
        </li>
        <li className="py-2">
          <NavLink to="/blog" onClick={handleNavLinkClick}>
            Blog
          </NavLink>
        </li>
        <li className="py-2">
          <NavLink to="/about" onClick={handleNavLinkClick}>
            About
          </NavLink>
        </li>
        <li className="py-2">
          <NavLink to="/contact" onClick={handleNavLinkClick}>
            Contact
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
