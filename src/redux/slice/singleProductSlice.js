import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getSingleProducts = createAsyncThunk("singleProduct/getSingleProducts",
    async (id) => {
        try {
            const { data } = await axios(`https://raw.githubusercontent.com/sbekovv/apiLays/master/api.json`)
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
);


const singleProductSlice = createSlice({
    name: 'singleProduct',
    initialState: {
        singleProductsData: [],
        isLoading: false,
        error: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSingleProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getSingleProducts.fulfilled, (state, { payload }) => {
                state.singleProductsData = payload;
                state.isLoading = false;

            })
            .addCase(getSingleProducts.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            });
    },
});

export default singleProductSlice;
