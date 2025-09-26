import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderSchema.js";

export const addOrderItems = asyncHandler(async (req, res) => {
	const {
		cartItems,
		paymentMethod,
		price,
		shippingAddress,
		shippingPrice,
		taxPrice,
		totalPrice,
	} = req.body;

	if (cartItems && cartItems.length === 0) {
		res.status(400);
		throw new Error("The cart list is empty");
	} else {
		const order = new Order({
			orderItems: cartItems.map((x) => ({
				...x,
				qty: x.quantity,
				product: x._id,
				id: undefined,
			})), totalPrice, shippingAddress, paymentMethod, taxPrice, shippingPrice, price,
		});

		const createdOrder = await order.save();
		res.status(201).json(createdOrder);
	}
});

export const getMyOrders = asyncHandler(async (req, res) => {
	const orders = await Order.find({user: req.user._id});
	res.status(200).json(orders)
});

export const getOrderById = asyncHandler(async (req, res) => {
	const order = await Order.findById(req.params.id).populate("user", "name, email");
	if (order) {
	res.status(200).json(order);
	} else {
		res.status(404);
		throw new Error("Order not found");
	}
});

export const updateOrderToPaid = asyncHandler(async (req, res) => {
	console.log("hi{4}");
});

export const updateOrderToDelivered = asyncHandler(async (req, res) => {
	console.log("hi{5}");
});

export const getOrders = asyncHandler(async (req, res) => {
	console.log("hi{6}");
});