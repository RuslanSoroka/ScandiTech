import { apiSlice } from "../apiSlices/apiSlice";
import { IProduct } from "../../models";
import { PRODUCTS_URL } from "../../utils/theme/constants";

const productsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query<IProduct[], void>({
            query: () => PRODUCTS_URL,
        }),
        getProductById: builder.query<IProduct, string>({
            query: (id)=> `${PRODUCTS_URL}/${id}`,
        })
    }),
});

export const { useGetAllProductsQuery, useGetProductByIdQuery } = productsApi;
export default productsApi;
