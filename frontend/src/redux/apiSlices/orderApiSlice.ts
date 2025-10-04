import { apiSlice } from "./apiSlice";
import { ORDERS_URL } from "../../utils/constants";

const ordersApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		createOrder: builder.mutation({
			query: (order) => ({
				url: ORDERS_URL,
				method: "POST",
				body: order,
			}),
		}),
		getSingleOrder: builder.query({
			query: (id) => `${ORDERS_URL}/${id}`,
		}),
	}),
});

export const { useCreateOrderMutation, useGetSingleOrderQuery } = ordersApiSlice;