import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  user: null,
  token: null,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      { payload: { user, token } }: PayloadAction<{ user: any; token: string }>
    ) => {
      state.user = user;
      state.token = token;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
    },

    getTokenFromLocalStorage: (state) => {
      state.token = localStorage.getItem("token");
    },
    removeTokenFromLocalStorage: () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});

export const {
  setCredentials,
  getTokenFromLocalStorage,
  removeTokenFromLocalStorage,
} = authSlice.actions;

export default authSlice.reducer;
