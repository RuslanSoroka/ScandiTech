import { apiSlice } from "./apiSlice";
import { USERS_URL } from "../../utils/constants";
import { data } from "react-router-dom";

const usersApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (data) => ({
				url: `${USERS_URL}/auth`,
				method: "POST",
				body: data,
			}),
		}),
		logout: builder.mutation({
			query: ()=> ({
				url: `${USERS_URL}/logout`,
				method: "POST",
			}),
		}),
		registration: builder.mutation({
			query: (data)=> ({
				url: `${USERS_URL}/`,
				method: "POST",
				body: data,
			})
		}),
		profile: builder.mutation({
			query:(data)=> ({
				url: `${USERS_URL}/profile`,
				method: "PUT",
				body: data,
			})
		}),
	}),

});

export const {useLoginMutation, useLogoutMutation, useRegistrationMutation, useProfileMutation} = usersApiSlice;