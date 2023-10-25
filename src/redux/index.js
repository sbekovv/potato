import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import productSlice from "./slice/productSlice";
import cartSlice from "./slice/cartSlice";
import singleProductSlice from "./slice/singleProductSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        products: productSlice,
        cart: cartSlice,
        [singleProductSlice.name]: singleProductSlice.reducer,
    },
})

export default store;