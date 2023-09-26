import React from "react";
import { GoodsItem } from "./GoodsItem";

export const GoodsList = (props) => {
  const { goods = [], addToBasket = Function.prototype } = props;
  console.log(props);
  return (
    <div className="goods">
      {goods &&
        goods.map((el) => <GoodsItem goods={el} addToBasket={addToBasket} />)}
    </div>
  );
};
