import React, { useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { totalQuantity } from "./utils";

export const Cart = (props) => {
  const [total, setTotal] = useState(0);
  const { openBasket } = props;

  const quantity = useSelector((state) => state.basket.basket);

  useEffect(() => {
    setTotal(totalQuantity(quantity));
  }, [quantity]);

  return (
    <NavLink to={"/basket"} className="cart">
      <ShoppingCartIcon onClick={openBasket} />
      {quantity ? <span>{total}</span> : null}
    </NavLink>
  );
};
