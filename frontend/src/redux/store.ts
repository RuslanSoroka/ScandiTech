import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlices/apiSlice";
import cartSlice from "./slices/cartSlice";
import authSlice from "./slices/authSlice";

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		cart: cartSlice,
		auth: authSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
