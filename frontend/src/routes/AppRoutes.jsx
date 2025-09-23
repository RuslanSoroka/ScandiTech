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

let router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index path="/" element={<HomeScreen />} />
			<Route path="/product/:id" element={<ProductScreen />} />
			<Route path="/cart" element={<CartScreen />} />
			<Route path={"/login"} element={<LoginScreen />} />
			<Route path={'/registration'} element={<RegistrationScreen />} />
		</Route>
	)
);

export default router;
