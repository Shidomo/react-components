import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  cartItems: [],
  pizzas: [],
  isLoading: false,
  totalItems: 0,
  totalPrice: 0,
  error: null,
};

export const getAllPizzas = createAsyncThunk("cart/getAllPizzas", async () => {
  const res = await fetch("https://react-fast-pizza-api.onrender.com/api/menu");
  const { data } = await res.json();
  return data;
});

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const findItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id,
      );

      if (!findItem) {
        state.cartItems.push({ ...action.payload, qty: 1 });
      } else {
        findItem.qty += 1;
      }

      state.totalItems = calcTotalItems(state.cartItems);
      state.totalPrice = calcTotalPrice(state.cartItems);
    },

    deleteFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload,
      );
      state.totalItems = calcTotalItems(state.cartItems);
      state.totalPrice = calcTotalPrice(state.cartItems);
    },
    incrementFromCart: (state, action) => {
      const findItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload,
      );
      findItem.qty += 1;
      state.totalItems = calcTotalItems(state.cartItems);
      state.totalPrice = calcTotalPrice(state.cartItems);
    },
    decrementFromCart: (state, action) => {
      const findItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload,
      );
      if (findItem && findItem.qty <= 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload,
        );
      }
      findItem.qty -= 1;
      state.totalItems = calcTotalItems(state.cartItems);
      state.totalPrice = calcTotalPrice(state.cartItems);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllPizzas.pending, (state, action) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(getAllPizzas.fulfilled, (state, action) => {
      state.pizzas = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getAllPizzas.rejected, (state, action) => {
      state.isLoading = false;
      state.error = "failed to fetch";
    });
  },
});

export default cartSlice.reducer;

export const {
  addToCart,
  deleteFromCart,
  incrementFromCart,
  decrementFromCart,
} = cartSlice.actions;

const calcTotalItems = (items: any) =>
  (items = items.reduce((acc, item) => acc + item.qty, 0));
const calcTotalPrice = (items: any) =>
  (items = items.reduce((acc, item) => acc + item.qty * item.unitPrice, 0));
