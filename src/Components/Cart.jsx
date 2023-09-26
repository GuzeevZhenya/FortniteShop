import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Basket } from "./Basket";
export const Cart = (props) => {
  const { quantity = 0, handleBasketShow } = props;

  return (
    <div className="cart" onClick={handleBasketShow}>
      <ShoppingCartIcon />
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
};
