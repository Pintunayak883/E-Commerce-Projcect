import React from "react";
import FilterCard from "../Componts/FilterProduct/FilterCard";
import Cart from "../Componts/CartComponts/Cart";
const Shop = () => {
  return (
    <>
      <div className="py-24">
        <FilterCard />
        <Cart />
      </div>
    </>
  );
};

export default Shop;
