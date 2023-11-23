import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { BasketItem } from "./BasketItem";
export const Basket = (props) => {
  const {
    order = [],
    // handleBasketShow = Function.prototype,
    // removeHandler = Function.prototype,
  } = props;

  const totalPrice = order.reduce((total, el) => {
    return (total += el.price * el.quantity);
  }, 0);

  return (
    <ul className="basket basket-list">
      <CloseIcon onClick={props.handleBasketShow} className="basket-close" />
      <h2 className="collection-item active">Корзина</h2>
      {order.length ? (
        order.map((el) => {
          console.log(el);
          return (
            <BasketItem
              key={el.id}
              {...el}
              minusQuantity={props.minusQuantity}
              removeHandler={props.removeHandler}
              plusQuantity={props.plusQuantity}
            />
          );
        })
      ) : (
        <li>Корзина Пуста</li>
      )}
      <h2 className="collection-item">Общая стоимость: {totalPrice}</h2>
    </ul>
  );
};
