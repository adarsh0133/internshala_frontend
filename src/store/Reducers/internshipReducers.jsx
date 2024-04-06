// internshipsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  error: null,
};

const internshipsSlice = createSlice({
  name: 'internships',
  initialState,
  reducers: {
    internshipsFound(state, action) {
      state.data = action.payload;
      state.error = null;
    },
    interdetail(state, action) {
      state.data = action.payload;
      state.error = null;
    },
    createdinternship(state, action) {
      state.data = action.payload;
      state.error = null;
    },
  },
});

export const { internshipsFound,interdetail ,createdinternship } = internshipsSlice.actions;
export default internshipsSlice.reducer;
