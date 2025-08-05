import {ICartItem} from "../../models";
import {Card, CardContent, CardMedia, MenuItem, Select, Typography, SelectChangeEvent, Box} from "@mui/material";
import {styles} from "./CartItem.styles";
import IconButton from '@mui/material/IconButton';
import {FaTrash} from "react-icons/fa";
import {updateQuantity} from "../../redux/slices/cartSlice";
import {useAppDispatch} from "../../hooks/reduxHooks";

interface CartItemProps {
    itemData: ICartItem;
    key: string,
}

const CartItem = ({key, itemData}: CartItemProps) => {
    const {_id, image, quantity, price, name, countInStock} = itemData;
    const dispatch = useAppDispatch();


    const handleChange = (event: SelectChangeEvent) => {
        const selectedQuantity: number = Number(event.target.value);
        dispatch(updateQuantity({_id, quantity: selectedQuantity}))
        console.log(selectedQuantity)
    }
    return (
        <Card key={key} sx={styles.cartItemBox}>
            <CardMedia sx={styles.itemImage} component="img" src={image} alt={`It is ${name} in your cart`} width={50}
                       height={50}/>
            <CardContent sx={styles.contentBox}>
                <Typography sx={styles.itemName} component="h3" variant='h5'>{name}</Typography>
                <Typography sx={styles.price} variant={"subtitle1"}>Price: ${price}</Typography>
                <Box sx={styles.actionsBox}>
                    <Select
                        variant={'outlined'}
                        value={quantity.toString()}
                        onChange={handleChange}
                    >
                        {[...Array(countInStock).keys()].map((option: number) => <MenuItem key={option + 1}
                                                                                           value={option + 1}>{option + 1}</MenuItem>)}

                    </Select>
                    <IconButton sx={styles.deleteButton}>
                        <FaTrash/>
                    </IconButton>
                </Box>
            </CardContent>
        </Card>
    );
};

export default CartItem;
