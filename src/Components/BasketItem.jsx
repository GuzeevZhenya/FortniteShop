import React from "react";

export const BasketItem = (props) => {
  const { id, name, price, quantity } = props;
  return (
    <li>
      {name} X{quantity} - {price}
      <span>
        X
      </span>
    </li>
  );
};
