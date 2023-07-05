import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  userIn: true,
  user: {
    name: "Miklo",
    role: "candidate",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
