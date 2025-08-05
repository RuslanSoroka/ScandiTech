import {Theme} from "@mui/material";

export const styles = {
    contentWrapper: (theme: Theme) => ({
        display: "flex",
        gap: theme.spacing(2),
    }),
    itemsWrapper: (theme: Theme)=> ({
        flex: "1 1 60%",
        gap: theme.spacing(1)
    }),
}
