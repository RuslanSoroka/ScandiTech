import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes/AppRoutes";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./utils/theme/theme";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { PayPalScriptProvider, ReactPayPalScriptOptions } from "@paypal/react-paypal-js";

const initialOptions: ReactPayPalScriptOptions = {
	clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID as string,
	currency: "EUR",
	intent: "capture",
};

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<PayPalScriptProvider options={initialOptions}>
					<RouterProvider router={router} />
				</PayPalScriptProvider>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
);
