import {Button, Paper, Typography} from "@mui/material";
import {useAppSelector} from "../../hooks/reduxHooks";
import {styles} from './CartSubtotal.styles';

const CartSubtotal = () => {
    const {cartItemCount, price} = useAppSelector(state => (
        {
            cartItemCount: state.cart.cartItems.length,
            price: state.cart.price,
        }
    ));
    return (
        <Paper sx={styles.subtotal}>
            <Typography variant="h3" component="h2">
                {`Subtotal (${cartItemCount.toString()}) items`}
            </Typography>
            <Typography sx={styles.price} variant="body1">${price}</Typography>

            <Button sx={styles.button}
                    variant="contained"
            >
                Proceed to checkout
            </Button>

        </Paper>
    );
};

export default CartSubtotal;
