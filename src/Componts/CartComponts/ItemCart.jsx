import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { RemoveItem, IncresQty, DecresQty } from "../../redux/Slice/CartSlice";
import { useDispatch } from "react-redux";
// Import statements...

const ItemCart = ({ img, name, price, qty, id }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(RemoveItem(id));
  };

  const handleDecreaseQuantity = () => {
    dispatch(DecresQty(id));
  };

  const handleIncreaseQuantity = () => {
    dispatch(IncresQty(id));
  };

  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3 relative">
      <DeleteIcon
        fontSize="10px"
        onClick={handleRemoveItem}
        className="absolute right-0 text-gray-600 cursor-pointer hover:text-red-500"
      />
      <img src={img} alt="" className="w-[50px] h-[50px]" />
      <div className="leading-5"></div>
      <div className="">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex justify-between">
          <span className="text-[#717fea] font-bold">{price}$</span>
          <div className="flex justify-between items-center absolute gap-1 right-7">
            <RemoveIcon
              onClick={handleDecreaseQuantity}
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-[#717Fea] hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
            <span>{qty}</span>
            <AddIcon
              onClick={handleIncreaseQuantity}
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-[#717Fea] hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
