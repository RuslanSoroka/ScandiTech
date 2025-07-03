import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Button,
    Stack,
    TextField,
    IconButton,
    useTheme,
    MenuItem,
    Menu,
    Container,
} from "@mui/material";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./Header.styles";
import { Link } from "react-router-dom";

const Header = () => {
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box component={"header"}>
            <AppBar position="static">
                <Container maxWidth="xxl">
                    <Toolbar sx={styles.toolbar}>
                        <Stack
                            direction="row"
                            justifyContent={"space-between"}
                            alignItems={"center"}
                            width="100%"
                            marginY={1}
                            gap={3}
                        >
                            <Box flex={1}>
                                <Link to="/">
                                    <Typography
                                        variant="h4"
                                        component="div"
                                        color="header.color"
                                    >
                                        ScandiTech
                                    </Typography>
                                </Link>
                            </Box>
                            <Box display={"flex"} alignContent={"center"}>
                                <Stack
                                    direction="row"
                                    gap={1}
                                    alignItems={"center"}
                                    justifyContent={"flex-end"}
                                >
                                    <TextField
                                        variant="outlined"
                                        id="outlined-search"
                                        type="search"
                                        autoComplete="off"
                                        sx={styles.input}
                                    />
                                    <Button
                                        sx={{ height: 40 }}
                                        color="success"
                                        variant="outlined"
                                    >
                                        Search
                                    </Button>
                                </Stack>
                                <Box sx={styles.humburgerWrapper}>
                                    <IconButton
                                        sx={styles.iconButton}
                                        aria-label="menu"
                                        onClick={handleClick}
                                    >
                                        <GiHamburgerMenu />
                                    </IconButton>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            "aria-labelledby": "basic-button",
                                        }}
                                    >
                                        <MenuItem
                                            sx={{ color: "#555555" }}
                                            onClick={handleClose}
                                        >
                                            Cart
                                        </MenuItem>
                                        <MenuItem
                                            sx={{ color: "#555555" }}
                                            onClick={handleClose}
                                        >
                                            Sign In
                                        </MenuItem>
                                    </Menu>
                                </Box>
                                <Stack
                                    direction="row"
                                    gap={1}
                                    alignItems="center"
                                    sx={styles.menu}
                                    marginLeft={2}
                                >
                                    <IconButton
                                        aria-label="add to shopping cart"
                                        sx={styles.iconButton}
                                    >
                                        <FaShoppingCart /> Cart
                                    </IconButton>
                                    <IconButton
                                        sx={styles.iconButton}
                                        aria-label="sign in"
                                    >
                                        <FaUser /> Sign In
                                    </IconButton>
                                </Stack>
                            </Box>
                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};

export default Header;
