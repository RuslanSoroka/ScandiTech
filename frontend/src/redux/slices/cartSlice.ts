import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICartItem} from "../../models";

interface ICartState {
    cartItems: ICartItem[];
    price: number;
    shippingPrice: number,
    taxPrice: number,
    totalPrice: number,
}

const initialState: ICartState = localStorage.getItem("cart") !== null ? JSON.parse(localStorage.getItem("cart")!) : {cartItems: [],   price: 0,
    shippingPrice: 0,
    taxPrice: 0,
    totalPrice: 0
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCartItem: (state, action: PayloadAction<ICartItem>) => {
            const newItem: ICartItem = action.payload;
            const existItem = state.cartItems.find(item => item.id === newItem.id);

            if (existItem) {
                state.cartItems = state.cartItems.map((item: ICartItem) => {
                    return item.id === existItem.id ? newItem : item;
                })
            } else {
                state.cartItems.push(newItem);
            }

            state.price = state.cartItems.reduce((acc: number, item: ICartItem) => acc += item.price * item.quantity, 0);

            state.shippingPrice = state.price >= 100 ? 0 : 15;

            state.taxPrice = 0.15 * state.price;

            const TOTAL_AMMOUNT = (state.price + state.shippingPrice + state.taxPrice).toFixed(2)
            state.totalPrice = Number(TOTAL_AMMOUNT);
            localStorage.setItem("cart", JSON.stringify(state));
        },
    },
});

export const {addCartItem} = cartSlice.actions;

export default cartSlice.reducer;