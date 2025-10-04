import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import App from "../App";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import CartScreen from "../screens/CartScreen";
import LoginScreen from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import ShippingScreen from "../screens/ShippingScreen";
import PrivateRoute from "./PrivateRoute.tsx";
import PaymentScreen from "../screens/PaymentScreen/PaymentScreen";
import PlaceOrderScreen from "../screens/PlaceOrderScreen/PlaceOrderScreen";
import OrderScreen from "../screens/OrderScreen";

let router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index path="/" element={<HomeScreen />} />
			<Route path="/product/:id" element={<ProductScreen />} />
			<Route path="/cart" element={<CartScreen />} />
			<Route path={"/login"} element={<LoginScreen />} />
			<Route path={"/registration"} element={<RegistrationScreen />} />
			<Route path="" element={<PrivateRoute />}>
				<Route path="/shipping" element={<ShippingScreen />} />
				<Route path="/payment" element={<PaymentScreen />} />
				<Route path="placeorder" element={<PlaceOrderScreen />} />
				<Route path={"/orders/:id"} element={<OrderScreen/>}></Route>
			</Route>
		</Route>,
	),
);

export default router;
