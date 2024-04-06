import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employe: null,
    isAuthh: false,
};

export const employeSlice = createSlice({
    name: "employe",
    initialState,
    reducers: {
        saveEmploye: (state, action) => {
            state.employe = action.payload;
            state.isAuthh = true;
        },
        removeEmploye: (state, action) => {
            state.employe = null;
            state.isAuthh = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const { saveEmploye, removeEmploye } = employeSlice.actions;

export default employeSlice.reducer;