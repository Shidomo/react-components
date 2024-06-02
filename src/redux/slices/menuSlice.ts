import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const menuReducer = createSlice({
  name: "menuReducer",
  initialState,
  reducers: {
    getMenuItemsStart(state) {
      state.loading = true;
      state.error = null;
    },
    getMenuItemsSuccess(state, action) {
      state.items = action.payload;
      state.loading = false;
    },
    getMenuItemsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getMenuItemsStart, getMenuItemsSuccess, getMenuItemsFailure } =
  menuReducer.actions;

export default menuReducer.reducer;
