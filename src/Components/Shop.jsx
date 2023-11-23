import React, { useState, useEffect } from "react";
import { API_URL, API_KEY } from "../config.js";
import { Preloader } from "./Preloader.jsx";
import { GoodsList } from "./GoodsList.jsx";
import { HandleServerAppError } from "./HandleServerAppError";
import { Cart } from "./Cart.jsx";
import { Basket } from "./Basket.jsx";

export const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    setLoading(true);
    fetch(API_URL, { headers: { Authorization: API_KEY } }).then((res) =>
      res
        .json()
        .then((data) => {
          setGoods(data.featured);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          setError(error);
        })
    );
    window.scrollTo(0, 0);
  }, []);

  const buyProduct = (product) => {
    const itemIndex = order.findIndex(
      (orderItem) => orderItem.id === product.id
    );

    if (itemIndex < 0) {
      const newItem = {
        ...product,
        quatity: 1,
      };
      setOrder([...order, product]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === orderItem.id) {
          return {
            ...order,
            quatity: orderItem.quatity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
  };

  return (
    <div>
      <HandleServerAppError error={error} />
      <Cart quatity={order.length} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} buyProduct={buyProduct} />
      )}
      <Basket order={order} />
    </div>
  );
};
