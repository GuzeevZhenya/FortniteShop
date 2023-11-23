import React from "react";
import { GoodsItem } from "./GoodsItem";

export const GoodsList = (props) => {
  const { goods = [], buyProduct } = props;

  if (goods.lenght) {
    return <h3>Nothing</h3>;
  }
  return (
    <div className="goods">
      {goods &&
        goods.map((el) => <GoodsItem {...el} buyProduct={buyProduct} />)}
    </div>
  );
};
