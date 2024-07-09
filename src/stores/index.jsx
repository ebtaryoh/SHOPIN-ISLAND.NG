import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../stores/Cart';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
})
export default store