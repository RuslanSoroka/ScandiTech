import { FormScreensSharedStyles as shippingStyles } from "../../utils/shardStyles/formsSharedStyles.styles";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addShippingAddress } from "../../redux/slices/cartSlice";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import { IShippingInfo } from "../../models";
import FormInput from "../../components/UI/FormInput";
import ShippingSchema from "../../utils/validationShemas/ShippingSchema";
import CheckoutSteps from "../../components/UI/CheckoutSteps";


const ShippingScreen = () => {
	const shippingAddress = useAppSelector((state) => state.cart.shippingAddress);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { control, handleSubmit } = useForm<IShippingInfo>({
		resolver: yupResolver(ShippingSchema),
		defaultValues: {
			address: shippingAddress?.address || "",
			city: shippingAddress?.city || "",
			postalCode: shippingAddress?.postalCode || "",
			country: shippingAddress?.country || "",
		},
	});

	const onSubmit: SubmitHandler<IShippingInfo> = async (data: IShippingInfo) => {
		dispatch(addShippingAddress(data));
		navigate("/payment");
	};
	return (
		<>
			<CheckoutSteps step1 step2 />
			<Box sx={shippingStyles.screen}>
				<Typography variant="h1">Shipping</Typography>
				<Box sx={shippingStyles.formContainer} component="form" onSubmit={handleSubmit(onSubmit)}>
					<Box sx={shippingStyles.formContent}>
						<FormInput name={"address"} label={"Address"} control={control} />
						<FormInput name={"city"} label={"City"} control={control} />
						<FormInput name={"postalCode"} label={"Postal Code"} control={control} />
						<FormInput name={"country"} label={"Country"} control={control} />
					</Box>
					<Box sx={shippingStyles.formSubmit}>
						<Button type="submit" variant="contained">
							Continue
						</Button>
					</Box>
				</Box>
			</Box>
		</>

	);
};

export default ShippingScreen;
