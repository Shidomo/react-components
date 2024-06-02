import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice.ts";
import authSlice from "./slices/authSlice.ts";
import cartReducer from "./slices/cartSlice.ts";
import orderReducer from "./slices/orderSlice.ts";
import menuReducer from "./slices/menuSlice.ts";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    counter: counterReducer,
    auth: authSlice,
    cart: cartReducer,
    order: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
