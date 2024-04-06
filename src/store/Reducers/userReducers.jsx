import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuth: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
      state.error = null;
    },
    removeUser: (state, action) => {
      state.user = null;
      state.isAuth = false;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveUser, removeUser, setError } = userSlice.actions;

export default userSlice.reducer;
