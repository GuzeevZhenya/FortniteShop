import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const Cart = (props) => {
  const { quantity = 0 } = props;
 
  return (
    <div className="cart">
      <ShoppingCartIcon />
      {quantity ? <span>{quantity}</span> : null}
    </div>
  );
};
