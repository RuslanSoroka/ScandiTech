import {ICartItem, ICartState} from "../../models";

export const formatNumber = (num: number)=> {
    const formatedNumber: number = Number(num.toFixed(2));
    return formatedNumber;
}

export const updateCart = (state: ICartState) => {
    state.price = formatNumber(state.cartItems.reduce((acc: number, item: ICartItem) => acc + item.price * item.quantity, 0));

    state.shippingPrice = formatNumber(state.price >= 100 ? 0 : 15);

    state.taxPrice = formatNumber(0.15 * state.price);

    state.totalPrice = formatNumber(state.price + state.shippingPrice + state.taxPrice);
    localStorage.setItem("cart", JSON.stringify(state));
}