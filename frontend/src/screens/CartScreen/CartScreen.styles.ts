import {Theme} from "@mui/material";

export const styles = {
    cartScreen: (theme: Theme) => ({
        display: "flex",
        flexDirection: 'column',
        gap: theme.spacing(3),
        paddingBlock: theme.spacing(2),
    }),
    contentWrapper: (theme: Theme) => ({
        display: "flex",
        gap: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            flexDirection: 'column-reverse'
        }

    }),
    itemsWrapper: (theme: Theme) => ({
        flex: "1 1 60%",
        gap: theme.spacing(1)
    }),
    subtotalWrapper: {
        flex: "0 1 35%",
    }
}
