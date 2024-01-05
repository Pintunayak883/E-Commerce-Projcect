import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { addItem } from "../../redux/Slice/CartSlice";
import { useDispatch } from "react-redux";
const Card = ({ id, name, img, price, category, product }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="">
        <div class="max-w-full max-h-full overflow-hidden">
          <img
            src={img}
            alt=""
            class="transform transition-transform hover:scale-110 duration-1000"
          />
        </div>

        <div className="flex justify-between m-2 text-[14px] text-['Poppins',Reguler] ">
          <div>
            <p className="text-[#999]">{name}</p>
            <p className="text-[#666]">$ {price}</p>
          </div>
          <div>
            <ShoppingBasketIcon
              onClick={() => dispatch(addItem(product))}
              className="text-[#666] cursor-pointer hover:text-[#717FE0]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
