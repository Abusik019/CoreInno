import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
const API_URL = import.meta.env.VITE_API_URL;


const initialState = {
    category: []
}

export const fetchCategory = createAsyncThunk('category/fetch', 
    async (_, thunkAPI) => {
        try {
            const res = await fetch(`${API_URL}/api/category/all`)
            const category = await res.json()
            
            if(category.error){
                return thunkAPI.rejectWithValue(category.error)
            }
            return category
        } catch (error) {
            thunkAPI.rejectWithValue(error)
        }
    }
)

const categorySlice = createSlice({
    name: "Category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchCategory.fulfilled, (state, action) => {
            state.category = action.payload
        })
    }
})

export default categorySlice.reducer