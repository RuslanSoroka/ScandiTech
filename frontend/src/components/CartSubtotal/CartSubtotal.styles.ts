import {Theme} from "@mui/material";
import theme from "../../utils/theme/theme";

export const styles = {
    subtotal: (theme: Theme) => ({
        padding: theme.spacing(2),
        [theme.breakpoints.down("md")]: {
            textAlign: 'center',
        }

    }),
    price: (theme: Theme) => ({
        fontSize: '1.2rem',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(3),
    }),
    button: {
        textTransform: "capitalize",
        [theme.breakpoints.down("md")]: {
            width: '100%',
        }
    }
}