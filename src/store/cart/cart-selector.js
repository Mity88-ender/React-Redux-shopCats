import { createSelector } from "@reduxjs/toolkit";

export const selectorСart = state => state.cart;

export const superSelectBuyGoods = createSelector(
  state => state.cart,
  state => state.goods.list,
  (cart, goods) => {
    return goods.filter(good => cart.includes(good.id));
  }
);
