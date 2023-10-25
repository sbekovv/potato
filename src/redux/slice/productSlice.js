import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("products/getProducts",
    async () => {
        const {data} = await  axios('https://raw.githubusercontent.com/sbekovv/apiLays/master/api.json');
        console.log(data)
        return data;
    }
)


const productSlice = createSlice({
    name: 'products',
    initialState : {
        productsData: [],
        isLoading: false,
        error: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true;
            })

            .addCase(getProducts.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.productsData = payload;
            })

            .addCase(getProducts.rejected, (state, {payload}) => {
                state.isLoading = false;
                state.error = payload;
            })
    },
});

export default productSlice.reducer