import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const initialState = {
    userAuth: {},
    user: {},
    users: [],
    token: localStorage.getItem("token"),
};

export const fetchUserAuth = createAsyncThunk(
    "users/fetchUserAuth",
    async (_, thunkAPI) => {
        const token = thunkAPI.getState().user.token;

        try {
            const res = await fetch(`${API_URL}/api/user/check-auth`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            const json = await res.json();
            if (json.error) {
                return thunkAPI.rejectWithValue(json.error);
            }
            return json;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async (_, thunkAPI) => {
        try {
            const res = await fetch(`${API_URL}/api/user/get-all`);
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
    const token = thunkAPI.getState().user.token;

    try{
        const response = await axios.get(`${API_URL}/api/user/get-one/${userID}`, {
            headers: {
                'Authorization': `Bearer ${token}`
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
    const token = thunkAPI.getState().user.token;

    try{
        const response = await axios.post(`${API_URL}/api/user/toggle-user-state`, { isFreelancer: isFreelancer }, {
            headers: {
                'Authorization': `Bearer ${token}`
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
    const token = thunkAPI.getState().user.token;

    try{
        const response = await axios.patch(`${API_URL}/api/user/update-profile`, data, {
            headers: {
                'Authorization': `Bearer ${token}`
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
            .addCase(fetchUserAuth.fulfilled, (state, action) => {
                state.userAuth = action.payload;
            })
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
