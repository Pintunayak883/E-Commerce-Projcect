import React from "react";
import Pdata from "../../data/Pdata";
import Card from "../CardComponts/Card";
import Catgorymenu from "../CatgoryComponts/Catgorymenu";
import { useSelector } from "react-redux";
const FilterCard = () => {
  const Category = useSelector((state) => state.category.Category);
  const Search = useSelector((state) => state.search.Search);
  return (
    <>
      <div className="py-10 md:px-32 px-20">
        <Catgorymenu />
        <div className="grid lg:grid-cols-4  md:grid-cols-2  gap-4 mt-12">
          {Pdata.filter((item) => {
            if (Category === "All Products") {
              return item.name.toLowerCase().includes(Search.toLowerCase());
            } else {
              return (
                Category === item.category &&
                item.name.toLowerCase().includes(Search.toLowerCase())
              );
            }
          }).map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                name={item.name}
                img={item.img}
                price={item.price}
                category={item.category}
                product={item}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FilterCard;
