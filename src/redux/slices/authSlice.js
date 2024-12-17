import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

const initialState = {
    error: null,
    loading: false,
    token: localStorage.getItem("token")
}

export const authSignUp = createAsyncThunk("auth/signup", async ({email, password, firstName, lastName}, thunkAPI) => {
    try {
        const res = await fetch("http://62.113.105.91:3000/api/user/sign-up", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
               email,
               password,
                firstName,
                lastName
                
            })
        });
        const json = await res.json()
        if (json.error) {
            return thunkAPI.rejectWithValue(json.error)
        }
        return json
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
});

export const authSignIn = createAsyncThunk("auth/signin", async ({email, password}, thunkAPI) => {
    try {
        const res = await fetch("http://62.113.105.91:3000/api/user/sign-in", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email,
                password
            })
        });
        const {token} = await res.json()
        console.log("мой токен", token);
        
       
        
        if(token.error){
            return thunkAPI.rejectWithValue(token.error)
        }
        localStorage.setItem("token", token)
        return token
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers(builder){
        builder
        .addCase(authSignUp.pending, (state) => {
            state.loading = true
        })
        .addCase(authSignUp.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        })
        .addCase(authSignUp.fulfilled, (state) => {
            state.loading = false;
            state.error = null
        })
        .addCase(authSignIn.pending, (state) => {
            state.loading = true
        })
        .addCase(authSignIn.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        })
        .addCase(authSignIn.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.token = action.payload
        })
    }
})

export default authSlice.reducer;