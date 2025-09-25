import { Box, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { JSX } from "react";
import { styles } from "./CheckoutSteps.styles";

interface ICheckoutStepsProps {
	step1?: boolean;
	step2?: boolean;
	step3?: boolean;
	step4?: boolean;
}

const renderStep = (active: boolean, path: string, content: string): JSX.Element | null => {
	if (active) {
		return (
			<Link component={RouterLink} to={path}>
				{content}
			</Link>
		);
	} else {
		return (<Typography aria-disabled component="span">{content}</Typography>);
	}
};

const CheckoutSteps = ({ step1, step2, step3, step4 }: ICheckoutStepsProps) => {
	return (
		<Box component="nav" sx={styles.navStep}>
			{renderStep(!!step1, "/login", "Login")}
			{renderStep(!!step2, "/shipping", "Shipping")}
			{renderStep(!!step3, "/payment", "Payment")}
			{renderStep(!!step4, "/placeorder", "Place Order")}
		</Box>
	);
};

export default CheckoutSteps;