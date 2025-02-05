import {
    createBrowserRouter,
    createRoutesFromElements,
    Routes,
    Route,
} from "react-router-dom";
import App from "../App";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";

let router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index path="/" element={<HomeScreen />} />
            <Route index path="/product/:id" element={<ProductScreen/>}/>
        </Route>
    )
);

export default router;
