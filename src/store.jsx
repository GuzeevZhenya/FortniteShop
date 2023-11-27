import {
  combineReducers,
  createStore,
  applyMiddleware,
  legacy_createStore,
} from "redux";
import thunkMiddleware from "redux-thunk";

import { basketReducer } from "./Redux/basket-reducer";
import { shopReducer } from "./Redux/shop-reducer";
import { appReducer } from "./Redux/app-reducer";

const rootReducer = combineReducers({
  basket: basketReducer,
  shop: shopReducer,
  app: appReducer,
});

export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);
window.store = store;
