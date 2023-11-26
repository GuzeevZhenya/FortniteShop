import { shopAPI } from "../api/shopAPI";

const initialState = {
  shop: [],
};

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {

    case "FETCH-SHOP-ITEMS": {
      return { ...state, shop: action.items }
    }
    default:

      return state;
  }
};


const getShopItemsAC = (items) => ({
  type: "FETCH-SHOP-ITEMS",
  items
})



export const fetchShopTC = () => {
  return (dispatch) => {
    shopAPI.getItems().then(res => dispatch(getShopItemsAC(res)))
  }
}