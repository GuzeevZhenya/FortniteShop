import React, { useState, useEffect } from "react";
import { API_URL, API_KEY } from "../config";
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { Basket } from "./Basket";

export const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(API_URL, { headers: { Authorization: API_KEY } }).then((res) =>
      res
        .json()
        .then((data) => {
          data.featured && setGoods(data.featured);
          setLoading(false);
        })
        .catch((error) => alert(error.message))
    );
  }, []);

  const addToBasket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((el, index) => {
        if (index === itemIndex) {
          return {
            ...el,
            quantity: el.quantity + 1,
          };
        } else {
          return el;
        }
      });
      setOrder(newOrder);
    }
  };

  const handleBasketShow = () => {
    setIsOpen(!isOpen);
  };

  const removeHandler = (id) => {
    const newOrder = order.filter((el) => el.id !== id);
    setOrder(newOrder);
  };

  const plusQuantity = (id) => {
    console.log(id);
    const newOrder = order.map((el) => {
      if (el.id === id) {
        return { ...el, quantity: el.quantity + 1 };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  const minusQuantity = (id) => {
    console.log(id);
    const newOrder = order.map((el) => {
      if (el.id === id) {
        return { ...el, quantity: el.quantity - 1 >= 0 ? el.quantity - 1 : 0 };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  return (
    <div>
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />

      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToBasket={addToBasket} />
      )}
      {isOpen && (
        <Basket
          order={order}
          removeHandler={removeHandler}
          handleBasketShow={handleBasketShow}
          plusQuantity={plusQuantity}
          minusQuantity={minusQuantity}
        />
      )}
    </div>
  );
};
