import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {IUserInfo} from "../../models";


interface IAuthState {
	userInfo: IUserInfo | null;
}

const initialState: IAuthState = {
	userInfo: localStorage.getItem("userInfo") !== null ? JSON.parse(localStorage.getItem("userInfo")!) : null,

};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setCredentials: (state, action: PayloadAction<IUserInfo>) => {
			state.userInfo = action.payload;
			localStorage.setItem('userInfo', JSON.stringify(state.userInfo));
		},
	},
});

export const { setCredentials } = authSlice.actions;
export default authSlice.reducer;
