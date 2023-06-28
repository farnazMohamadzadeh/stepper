import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (url) => {
    console.log(url);
    return fetch(url)
      .then((res) => res.json())
      .then((data) => data);
  }
);

const slice = createSlice({
  name: "products",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.push(...action.payload);
    });
  },
});
export default slice.reducer;
