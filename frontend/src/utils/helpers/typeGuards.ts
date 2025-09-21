import { IApiError } from "../../models";

export const isApiError = (error: any): error is IApiError => {
	return typeof error === "object" && error !== null && "data" in error && typeof error.data === "object" && error.data !== null && "message" in error.data;
};