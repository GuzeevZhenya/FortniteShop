import React, { useState } from "react";
import { BasketItem } from "./BasketItem";
export const Basket = (props) => {
  const { order = [] } = props;
  return (
    <ul className="basket">
      <li className="collection-item active">Корзина</li>
      {order.length ? (
        order.map((el) => {
          return <BasketItem key={el.id} {...el} />;
        })
      ) : (
        <li>Корзина Пуста</li>
      )}
      <li>Общая стоимость:</li>
    </ul>
  );
};
