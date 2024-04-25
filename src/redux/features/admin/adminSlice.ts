import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { AdminState } from "../../../Interfaces/interfaces";

const initialState: AdminState = {
    isAuthenticated: false,
    username: "",
    error: null,
};

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        login: (state, action) => {
            if (
                action.payload.username === "aldoadmin" &&
                action.payload.password === "Aldoadmin24"
            ) {
                state.isAuthenticated = true;
                state.username = action.payload.username;
                state.error = null;
            } else {
                state.error = "Credenciales incorrectas";
            }
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.username = "";
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

// Actions
export const { login, logout, setError } = adminSlice.actions;

// Selectors
export const selectIsAuthenticated = (state: RootState) =>
    state.admin.isAuthenticated;
export const selectAdminUsername = (state: RootState) => state.admin.username;
export const selectAdminError = (state: RootState) => state.admin.error;

// Reducer
export default adminSlice.reducer;
