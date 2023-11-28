import { shopAPI } from "../../api/shopAPI";
import { setStatusAC } from "./app-reducer";
import { handleServerNetworkError } from "../../Components/utils/error-utils";

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

export const fetchShopTC = (language = "ru") => {
  return (dispatch) => {
    dispatch(setStatusAC("loading"));
    shopAPI
      .getItems(language)
      .then((res) => {
        dispatch(getShopItemsAC(res));
        dispatch(setStatusAC("succeeded"));
      })
      .catch((error) => {
        handleServerNetworkError(error, dispatch);
      });
  };
};
