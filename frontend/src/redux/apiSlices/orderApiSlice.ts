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
			query: (id: string) => `${ORDERS_URL}/${id}`,
		}),
		payOrder: builder.mutation({
			query: ({ id, details }) => ({
				url: `${ORDERS_URL}/${id}/pay`,
				method: "PUT",
				body: { ...details },
			}),
		}),
		getUserOrderedItems: builder.query({
			query: ()=> `${ORDERS_URL}/mine`
		})
	}),
});

export const { useCreateOrderMutation, useGetSingleOrderQuery, usePayOrderMutation, useGetUserOrderedItemsQuery } = ordersApiSlice;