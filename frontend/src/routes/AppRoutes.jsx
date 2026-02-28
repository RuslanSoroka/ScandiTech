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
import ProfileScreen from "../screens/ProfileScreen";
import ROUTES from "./links";

let router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index path={ROUTES.home} element={<HomeScreen />} />
			<Route path={ROUTES.productPattern} element={<ProductScreen />} />
			<Route path={ROUTES.cart} element={<CartScreen />} />
			<Route path={ROUTES.login} element={<LoginScreen />} />
			<Route path={ROUTES.registration} element={<RegistrationScreen />} />
			<Route path="" element={<PrivateRoute />}>
				<Route path={ROUTES.shipping} element={<ShippingScreen />} />
				<Route path={ROUTES.payment} element={<PaymentScreen />} />
				<Route path={ROUTES.orderPlace} element={<PlaceOrderScreen />} />
				<Route path={ROUTES.orderPattern} element={<OrderScreen />}></Route>
				<Route path={ROUTES.profile} element={<ProfileScreen />}></Route>
			</Route>
		</Route>
	)
);

export default router;
