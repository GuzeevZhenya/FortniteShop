import { Dispatch } from "redux";

const initialState = {
  basket: [],
};

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-BASKET": {
      const existingItemIndex = state.basket.findIndex(
        (item) => item.id === action.basket.id
      );
      if (existingItemIndex !== -1) {
        const updatedBasket = [...state.basket];
        updatedBasket[existingItemIndex].quantity += 1;

        return {
          ...state,
          basket: updatedBasket,
        };
      } else {
        return {
          ...state,
          basket: [...state.basket, { ...action.basket, quantity: 1 }],
        };
      }
    }
    case "REMOVE-FROM-BASKET": {
      const updatedBasket = state.basket
        .map((el) => {
          if (el.id === action.id) {
            return {
              ...el,
              quantity: el.quantity - 1,
            };
          }
          return el;
        })
        .filter((el) => el.quantity > 0);

      return {
        ...state,
        basket: updatedBasket,
      };
    }
    case "ADD-TO-BASKET": {
      const updateBasket = state.basket.map((el) => {
        if (el.id === action.id) {
          return {
            ...el,
            quantity: el.quantity + 1,
          };
        }

        return el;
      });

      return {
        ...state,
        basket: updateBasket,
      };
    }
    case "REMOVE-BASKET-ITEM": {
      const updateBasket = state.basket.filter((el) => el.id !== action.id);

      return {
        ...state,
        basket: updateBasket,
      };
    }

    default:
      return state;
  }
};

export const addBasketActionCreater = (basket) => ({
  type: "ADD-BASKET",
  basket,
});

export const addToBasketActionCreater = (id) => ({
  type: "ADD-TO-BASKET",
  id,
});

export const removeFromBasketActionCreater = (id) => ({
  type: "REMOVE-FROM-BASKET",
  id,
});

export const removeBasketItemActionCreater = (id) => ({
  type: "REMOVE-BASKET-ITEM",
  id,
});
