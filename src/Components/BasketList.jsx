import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  removeFromBasketActionCreater,
  addToBasketActionCreater,
} from "../Redux/basket-reducer";

export const BasketList = () => {
  const basketItems = useSelector((state) => state.basket.basket);
  const dispatch = useDispatch();

  const addQuantity = (id) => {
    dispatch(addToBasketActionCreater(id));
  };

  const removeQuantity = (id) => {
    dispatch(removeFromBasketActionCreater(id));
  };

  return (
    <div>
      <h1>Корзина</h1>
      {basketItems &&
        basketItems.map((el) => {
          return (
            <div className="basket-item" key={el.id}>
              <img
                src={el.full_background}
                alt="Item 1"
                className="item-image"
              />
              <div className="item-details">
                <span className="item-name">{el.name}</span>
                <span className="item-price">{el.price}</span>
                <div>
                  <span onClick={() => addQuantity(el.id)}>+</span>
                  <span className="item-quantity">{el.quantity}</span>
                  <span onClick={() => removeQuantity(el.id)}>-</span>
                </div>
              </div>
            </div>
          );
        })}

      <div className="total-quantity">{basketItems.quantity}</div>
    </div>
  );
};
