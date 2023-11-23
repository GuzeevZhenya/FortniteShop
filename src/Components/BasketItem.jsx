import React from "react";
import CloseIcon from "@mui/icons-material/Close";

export const BasketItem = (props) => {
  const { id, name, price, quantity } = props;

  const removeOrder = (id) => {
    props.removeHandler(id);
  };

  return (
    <li className="basket-item">
      <div>
        {name} X <span onClick={() => props.plusQuantity(id)}>+</span>{" "}
        {quantity} <span onClick={() => props.minusQuantity(id)}>-</span> -{" "}
        {price * quantity}
      </div>

      <CloseIcon className="basket-delete" onClick={() => removeOrder(id)} />
    </li>
  );
};
