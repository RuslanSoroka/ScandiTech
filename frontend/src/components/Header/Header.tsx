import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Button,
    Stack,
    TextField,
    styled,
    IconButton,
} from "@mui/material";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import styles from "./Header.styles";

const Header = () => {
    return (
        <Box component={"header"}>
            <AppBar position="static">
                <Toolbar>
                    <Stack
                        direction="row"
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        width="100%"
                    >
                        <Typography variant="h4" component="div">
                            ScandiTech
                        </Typography>
                        <Box display={"flex"} alignContent={"center"}>
                            <Stack
                                direction="row"
                                gap={1}
                                alignItems={"center"}
                            >
                                <TextField
                                    label="Search Products..."
                                    type="text"
                                    placeholder="Search..."
                                    variant="outlined"
                                    sx={styles.input}
                                    size="small"
                                />
                                <Button
                                    size="large"
                                    color="success"
                                    variant="outlined"
                                >
                                    Search
                                </Button>
                            </Stack>
                            <Stack
                                direction="row"
                                gap={1}
                                alignItems="center"
                                sx={{ "> *": { color: "white" } }}
                                marginLeft={2}
                            >
                                <IconButton
                                    size="medium"
                                    aria-label="add to shopping cart"
                                    sx={styles.iconButton}
                                >
                                    <FaShoppingCart /> Cart
                                </IconButton>
                                <IconButton
                                    sx={styles.iconButton}
                                    size="medium"
                                    aria-label="sign in"
                                >
                                    <FaUser /> Sign In
                                </IconButton>
                            </Stack>
                        </Box>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
