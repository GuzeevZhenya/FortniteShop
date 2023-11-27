import { shopAPI } from "../api/shopAPI";
import { setStatusAC, setErrorAC } from "./app-reducer";

const initialState = {
  shop: [],
};

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH-SHOP-ITEMS": {
      return { ...state, shop: action.items };
    }
    default:
      return state;
  }
};

const getShopItemsAC = (items) => ({
  type: "FETCH-SHOP-ITEMS",
  items,
});

export const fetchShopTC = () => {
  return (dispatch) => {
    dispatch(setStatusAC("loading"));
    shopAPI
      .getItems()
      .then((res) => {
        dispatch(getShopItemsAC(res));
        dispatch(setStatusAC("succeeded"));
      })
      .catch((error) => {
        dispatch(setErrorAC(error));
      });
  };
};
