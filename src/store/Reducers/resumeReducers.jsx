import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  error: null,
  isAuth: false,
};

const resumeSlice = createSlice({
    name: 'resume',
    initialState,
    reducers: {
      resumeFound(state, action) {
        state.data = action.payload;
        state.isAuth = true;
        state.error = null;
      },
      // removeUser: (state, action) => {
      //   state.user = null;
      //   state.isAuth = false;
      //   state.error = null;
      // },
    },
  });
  
  export const { resumeFound } = resumeSlice.actions;
  export default resumeSlice.reducer;