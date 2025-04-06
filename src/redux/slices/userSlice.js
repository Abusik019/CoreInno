import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const initialState = {
    user: {},
    users: [],
    accessToken: localStorage.getItem("accessToken") || null,
};

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async (_, thunkAPI) => {
        const accessToken = thunkAPI.getState().user.accessToken;
        try {
            const res = await fetch(`${API_URL}/api/user/all`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            const user = await res.json();
            if (user.error) {
                return thunkAPI.rejectWithValue(user.error);
            }
            return user;
        } catch (error) {
            thunkAPI.rejectWithValue(error);
        }
    }
);

export const getUser = createAsyncThunk("users/getUsers", async (userID, thunkAPI) => {
    const accessToken = thunkAPI.getState().user.accessToken;

    try{
        const response = await axios.get(`${API_URL}/api/auth/check-me`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        if(response.status !== 200){
            throw new Error("Ошибка получения данных");
        }

        return response.data;
    } catch(error){
        console.error("Ошибка получения данных:", error); 
    }
})

export const toggleRole = createAsyncThunk("users/toggleRole", async (isFreelancer, thunkAPI) => {
    const accessToken = thunkAPI.getState().user.accessToken;

    try{
        const response = await axios.post(`${API_URL}/api/user/toggle-user-state`, { isFreelancer: isFreelancer }, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        if(response.status !== 200){
            throw new Error("Ошибка изменения роли");
        }

        return response.data;
    } catch(error){
        console.error("Ошибка изменения роли:", error); 
    }
})

export const updateUser = createAsyncThunk("users/updateUser", async (data, thunkAPI) => {
    const accessToken = thunkAPI.getState().user.accessToken;

    try{
        const response = await axios.patch(`${API_URL}/api/user/update-profile`, data, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        if(response.status !== 200){
            throw new Error("Ошибка изменения данных");
        }

        return response.data;
    } catch(error){
        console.error("Ошибка изменения данных:", error); 
    }
})

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.users = action.payload;
            });

        // get user
        builder.addCase(getUser.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(getUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loading = false;
            state.error = null;
        });

        builder.addCase(getUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });

        // toggle role
        builder.addCase(toggleRole.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(toggleRole.fulfilled, (state) => {
            state.loading = false;
            state.error = null;
        });

        builder.addCase(toggleRole.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });

        // update user
        builder.addCase(updateUser.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(updateUser.fulfilled, (state) => {
            state.loading = false;
            state.error = null;
        });

        builder.addCase(updateUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });
    },
});

export default userSlice.reducer;
