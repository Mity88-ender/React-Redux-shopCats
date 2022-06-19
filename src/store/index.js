import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart/cart-slice";
// import * as data from "../db";
import { goodsReducer } from "./goods/goods-slice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    goods: goodsReducer,
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     thunk: { extraArgument: { data } },
  //     serializableCheck: false,
  //   }),
});

export { store };
