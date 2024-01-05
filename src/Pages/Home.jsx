import React from "react";
import Poster from "../Componts/HomeComponts/Poster";
import Section from "../Componts/HomeComponts/Section";
import Overview from "../Componts/HomeComponts/Overview";
import Cart from "../Componts/CartComponts/Cart";
import Navbar from "../Componts/NavComponts/Navbar";

const Home = () => {
  return (
    <>
      <Poster />
      <Section />
      <Overview />
      <Cart />
    </>
  );
};

export default Home;
