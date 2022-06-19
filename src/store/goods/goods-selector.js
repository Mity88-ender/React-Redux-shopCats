export const selectgoodsInfo = state => ({
  status: state.goods.status,
  qty: state.goods.list.length,
});

export const selectgoodsList = state => state.goods.list;
