import {
  combineReducers,
  createStore,
  applyMiddleware,
  legacy_createStore,
} from "redux";
import thunkMiddleware from "redux-thunk";

import { basketReducer } from "./Reducers/basket-reducer";
import { shopReducer } from "./Reducers/shop-reducer";
import { appReducer } from "./Reducers/app-reducer";
import { languageReducer } from "./Reducers/language-reducer";

const rootReducer = combineReducers({
  basket: basketReducer,
  shop: shopReducer,
  app: appReducer,
  language: languageReducer,
});

export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);
window.store = store;
