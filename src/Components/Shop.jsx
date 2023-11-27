import React, { useState, useEffect } from "react";
import { API_URL, API_KEY } from "../config.js";
import { Preloader } from "./Preloader.jsx";
import { GoodsList } from "./GoodsList.jsx";
import { HandleServerAppError } from "./HandleServerAppError";
import { Cart } from "./Cart.jsx";
import { Basket } from "./Basket.jsx";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addBasketActionCreater } from "../Redux/basket-reducer";
import { fetchShopTC } from "../Redux/shop-reducer.jsx";

export const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // const [status, setStatus] = useState("idle");

  const dispatch = useDispatch();

  const shopItems = useSelector((state) => state.shop.shop);
  const status = useSelector((state) => state.app.status);
  const error = useSelector((state) => state.app.error);
 
  useEffect(() => {
    dispatch(fetchShopTC());
  }, []);

  //.then((res) =>
  //   res
  //     .json()
  //     .then((data) => {
  //       setGoods(data.featured);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setLoading(false);
  //       setError(error);
  //     })
  // );
  // window.scrollTo(0, 0);

  // const buyProduct = (product) => {
  //   const itemIndex = order.findIndex(
  //     (orderItem) => orderItem.id === product.id
  //   );

  //   if (itemIndex < 0) {
  //     const newItem = {
  //       ...product,
  //       quatity: 1,
  //     };
  //     setOrder([...order, newItem]);
  //     dispatch(addBasketActionCreater(order));
  //   } else {
  //     const newOrder = order.map((orderItem, index) => {
  //       if (index === orderItem.id) {
  //         return {
  //           ...order,
  //           quatity: orderItem.quatity + 1,
  //         };
  //       } else {
  //         return orderItem;
  //       }
  //     });
  //     dispatch(addBasketActionCreater(newOrder));
  //   }
  // };

  const buyProduct = (product) => {
    dispatch(addBasketActionCreater(product));
  };

  return (
    <div>
      <HandleServerAppError error={error} />
      <Cart quatity={order.length} />
      {status === "loading" ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} buyProduct={buyProduct} />
      )}
    </div>
  );
};
