export interface IProduct {
	_id: string;
	name: string;
	image: string;
	description: string;
	brand: string;
	category: string;
	price: number;
	countInStock: number;
	rating: number;
	numReviews: number;
}

export interface ICartItem {
	_id: string;
	name: string;
	price: number;
	image: string;
	countInStock: number;
	quantity: number;
}

export interface IShippingInfo {
	address: string;
	city: string;
	postalCode: string;
	country: string;
}

export interface ICartState {
	cartItems: ICartItem[];
	paymentMethod: string;
	price: number;
	shippingAddress: IShippingInfo;
	shippingPrice: number;
	taxPrice: number;
	totalPrice: number;
}

export interface ILoginInfo {
	email: string;
	password: string;
}

export interface IRegistrationInfo {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	repeatPassword: string;
}

export type TUpdateProfile<T> = {
	[K in keyof T]?: T[K] | undefined
}

export interface IUserInfo {
	_id: string;
	name: string;
	isAdmin: boolean;
	email: string;
}

export interface IApiError {
	data: {
		message: string;
	};
	status: number;
}
