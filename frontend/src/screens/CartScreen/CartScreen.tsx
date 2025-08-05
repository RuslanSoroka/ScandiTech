import {useAppSelector} from "../../hooks/reduxHooks";
import {Box, Stack, Typography} from "@mui/material";
import CartItem from "../../components/CartItem";
import {ICartItem} from "../../models";
import {styles} from './CartScreen.styles';

const CartScreen = () => {
    const {cartItems} = useAppSelector(state => state.cart);

    return (
        <Box>
            <Typography variant="h1">Cart</Typography>
            <Box sx={styles.contentWrapper}>
                <Stack sx={styles.itemsWrapper}>
                    {cartItems && (
                        cartItems.map((item: ICartItem) => (
                            <CartItem key={item._id} itemData={item}/>
                        ))
                    )}
                </Stack>

            </Box>
        </Box>
    );
}

export default CartScreen;
