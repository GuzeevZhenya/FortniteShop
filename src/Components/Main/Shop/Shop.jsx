import React, { useState, useEffect } from "react";
import { API_URL, API_KEY } from "../../../config.js";
import { Preloader } from "../../Preloader/Preloader.jsx";
import { GoodsList } from "../Goods/GoodsList.jsx";
import { ErrorSnackbar } from "../ErorSnackbar/ErrorSnackbar.jsx";
import { Cart } from "../Goods/Cart.jsx";
import { Basket } from "../Basket/Basket.jsx";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchShopTC } from "../../../Redux/Reducers/shop-reducer.jsx";
import {totalCountAllItems} from '../../utils/utils.js'

export const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState([]);

  const status = useSelector((state) => state.app.status);
  const languageMain = useSelector((state) => state.language.language);
  const basketItems = useSelector((state) => state.basket.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShopTC(languageMain));
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

  return (
    <div>
      <ErrorSnackbar />
      <Cart quatity={totalCountAllItems(basketItems)} />
      {status === "loading" ? <Preloader /> : <GoodsList goods={goods} />}
    </div>
  );
};
