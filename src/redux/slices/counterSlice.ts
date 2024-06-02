import { createSlice } from "@reduxjs/toolkit";

const initialState: { value: number } = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: () => initialState,
    incrementByValue: (state, action) => {
      state.value = state.value + +action.payload;
    },
  },
});

export default counterSlice.reducer;

export const { increment, decrement, reset, incrementByValue } =
  counterSlice.actions;
