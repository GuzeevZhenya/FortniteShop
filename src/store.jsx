import {
  combineReducers,
  createStore,
  applyMiddleware,
  legacy_createStore,
} from "redux";
import thunkMiddleware from "redux-thunk";

import { basketReducer } from "./Redux/basket-reducer";
import { shopReducer } from "./Redux/shop-reducer";

const rootReducer = combineReducers({
  basket: basketReducer,
  shop: shopReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));
window.store = store;
