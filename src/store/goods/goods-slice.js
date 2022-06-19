import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { data } from "../../db";

const goodsSlice = createSlice({
  name: "@@GOODS",
  initialState: {
    status: "idle",
    list: data,
  },
  reducers: {},
});

const goodsReducer = goodsSlice.reducer;
export { goodsReducer };
