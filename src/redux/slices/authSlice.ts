import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: false,
  reducers: {
    login: () => true,
    logout: () => false,
  },
});
export default authSlice.reducer;

export const { login, logout } = authSlice.actions;
