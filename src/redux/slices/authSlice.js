import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_URL = import.meta.env.VITE_API_URL;

const initialState = {
    error: null,
    loading: false,
    token: localStorage.getItem("token"),
    
};

export const authSignUp = createAsyncThunk(
    "auth/signup",
    async ({ email, password, firstName, lastName }, thunkAPI) => {
        try {
            const res = await fetch(`${API_URL}/api/user/sign-up`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password, firstName, lastName }),
            });
            const { token } = await res.json();
            console.log("мой токен", token);

            if (token.error) {
                return thunkAPI.rejectWithValue(token.error);
            }
            localStorage.setItem("token", token);
            return token;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const authSignIn = createAsyncThunk(
    "auth/signin",
    async ({ email, password }, thunkAPI) => {
        try {
            const res = await fetch(`${API_URL}/api/user/sign-in`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            const { token } = await res.json();
            console.log("мой токен", token);

            if (token.error) {
                return thunkAPI.rejectWithValue(token.error);
            }
            localStorage.setItem("token", token);
            return token;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            // Auth
            .addCase(authSignUp.pending, (state) => {
                state.loading = true;
            })
            .addCase(authSignUp.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(authSignUp.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.token = action.payload;
            })
            // Login
            .addCase(authSignIn.pending, (state) => {
                state.loading = true;
            })
            .addCase(authSignIn.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(authSignIn.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.token = action.payload;
            });
    },
});

export default authSlice.reducer;
