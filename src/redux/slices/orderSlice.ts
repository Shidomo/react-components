import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initState = {
  order: null,
  status: "idle",
  error: null,
};

export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (orderData: any, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://react-fast-pizza-api.onrender.com/api/order",
        orderData,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const orderSlice = createSlice({
  name: "order",
  initialState: initState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.status = "success";
        state.order = action.payload;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default orderSlice.reducer;
