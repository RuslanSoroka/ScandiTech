import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICartItem, ICartState} from "../../models";
import {updateCart} from "../../utils/helpers/updateCart";

export interface IUpdateQuantity {
    _id: string;
    quantity: number;
}

const initialState: ICartState = localStorage.getItem("cart") !== null ? JSON.parse(localStorage.getItem("cart")!) : {
    cartItems: [], price: 0,
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
            const existItem = state.cartItems.find(item => item._id === newItem._id);

            if (existItem) {
                state.cartItems = state.cartItems.map((item: ICartItem) => {
                    return item._id === existItem._id ? newItem : item;
                })
            } else {
                state.cartItems.push(newItem);
            }
            updateCart(state)
        },
        updateQuantity: (state, action: PayloadAction<IUpdateQuantity>) => {
            const {_id, quantity} = action.payload;
            const updatedItemIndex = state.cartItems.findIndex(item => item._id === _id);

            if (updatedItemIndex > -1) {
                state.cartItems[updatedItemIndex].quantity = quantity;
            } else {
                return
            }
            updateCart(state)
        },
        deleteItem: (state, action: PayloadAction<string>) => {
            const deleteId = action.payload;
            state.cartItems = state.cartItems.filter(item => item._id !== deleteId);
            updateCart(state)
        },
    },
});

export const {addCartItem, updateQuantity, deleteItem} = cartSlice.actions;

export default cartSlice.reducer;