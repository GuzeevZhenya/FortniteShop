import React from "react";
import { GoodsItem } from "./GoodsItem";
import { useSelector } from "react-redux";

export const GoodsList = (props) => {
  const { goods = [], buyProduct } = props;
  const shopItems = useSelector(state => state.shop.shop)

  console.log(shopItems)

  if (goods.lenght) {
    return <h3>Nothing</h3>;
  }
  return (
    <div className="goods">
      {shopItems &&
        shopItems.map((el) => <GoodsItem {...el} buyProduct={buyProduct} />)}
    </div>
  );
};
