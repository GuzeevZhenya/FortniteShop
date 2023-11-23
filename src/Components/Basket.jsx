import React from "react";

export const Basket = (props) => {
  const { order = [] } = props;
  console.log(order);
  return (
    <div className="cart-container">
      {order.map((item, index) => (
        <div key={index} className="product">
          {/* <img src={item.image} alt={item.name} className="product-image" /> */}
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};


