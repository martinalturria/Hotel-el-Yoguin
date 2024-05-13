import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface AdminState {
    isAuthenticated: boolean;
    username: string;
    error: string | null;
}

const initialState: AdminState = {
    isAuthenticated: false,
    username: "",
    error: null,
};

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{ email: string }>) => {
            state.isAuthenticated = true;
            state.username = action.payload.email;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.username = "";
            state.error = null;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
    },
});

// Actions
export const { setUser, logout, setError } = adminSlice.actions;

// Selectors
export const selectIsAuthenticated = (state: RootState) =>
    state.admin.isAuthenticated;
export const selectAdminUsername = (state: RootState) => state.admin.username;
export const selectAdminError = (state: RootState) => state.admin.error;

// Reducer
export default adminSlice.reducer;
