import {
  combineReducers,
  createStore,
  applyMiddleware,
  legacy_createStore,
} from "redux";

import { basketReducer } from "./Redux/basket-reducer";

const rootReducer = combineReducers({
  basket: basketReducer,
});

export const store = legacy_createStore(rootReducer);
window.store = store;
