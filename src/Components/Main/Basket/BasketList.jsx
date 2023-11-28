import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  removeFromBasketActionCreater,
  addToBasketActionCreater,
  removeBasketItemActionCreater,
} from "../../../Redux/Reducers/basket-reducer";
import { totalCountAllItems, totalPriceAllItems } from "../../utils/utils";

export const BasketList = () => {
  const basketItems = useSelector((state) => state.basket.basket);
  const dispatch = useDispatch();

  const addQuantity = (id) => {
    dispatch(addToBasketActionCreater(id));
  };

  const removeQuantity = (id) => {
    dispatch(removeFromBasketActionCreater(id));
  };

  const totalPrice = (price, quantity) => {
    return price * quantity;
  };

  const removeBasketItem = (id) => {
    dispatch(removeBasketItemActionCreater(id));
  };

  return (
    <div>
      <h1>Корзина</h1>
      {basketItems &&
        basketItems.map((el) => {
          return (
            <div className="basket-item" key={el.id}>
              <div
                className="basket-item__remove"
                onClick={() => removeBasketItem(el.id)}
              >
                X
              </div>
              <img
                src={el.full_background}
                alt="Item 1"
                className="item-image"
              />
              <div className="item-details">
                <span className="item-name">{el.name}</span>
                <span className="item-price">
                  {totalPrice(el.price, el.quantity)}
                </span>
                <div>
                  <span onClick={() => addQuantity(el.id)}>+</span>
                  <span className="item-quantity">{el.quantity}</span>
                  <span onClick={() => removeQuantity(el.id)}>-</span>
                </div>

                {/* <span>{totalPriceAllItems(el)}</span> */}
              </div>
            </div>
          );
        })}

      <div className="basket-total">
        <span className="basket-total__price">
          Итого:{totalPriceAllItems(basketItems)}
        </span>
        <span className="basket-total__items">
          {totalCountAllItems(basketItems)}:товаров{" "}
        </span>
      </div>
    </div>
  );
};
