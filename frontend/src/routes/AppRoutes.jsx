import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import App from "../App";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import CartScreen from "../screens/CartScreen";

let router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route index path="/" element={<HomeScreen/>}/>
            <Route path="/product/:id" element={<ProductScreen/>}/>
            <Route path="/cart" element={<CartScreen/>}/>
        </Route>
    )
);

export default router;
