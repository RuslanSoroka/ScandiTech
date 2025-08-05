import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Stack,
    IconButton,
    MenuItem,
    Menu,
    Container,
    Link, Badge
} from "@mui/material";
import {FaShoppingCart, FaUser} from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi";
import styles from "./Header.styles";
import {Link as RouterLink} from "react-router-dom";
import {useAppSelector} from "../../hooks/reduxHooks";

const Header = () => {
    const cartItemCount = useAppSelector(state => state.cart.cartItems.length)

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
                                <Link component={RouterLink} to="/">
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
                                <Box sx={styles.humburgerWrapper}>
                                    <IconButton
                                        sx={styles.iconButton}
                                        aria-label="menu"
                                        onClick={handleClick}
                                    >
                                        <GiHamburgerMenu/>
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
                                            sx={{color: "#555555"}}
                                            onClick={handleClose}
                                        >
                                            Cart
                                        </MenuItem>
                                        <MenuItem
                                            sx={{color: "#555555"}}
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
                                        to={'/cart'}
                                        aria-label="shopping cart"
                                        sx={styles.iconButton}
                                        component={RouterLink}
                                        size={"large"}
                                    >

                                        <Badge badgeContent={cartItemCount} color="secondary">
                                            <FaShoppingCart size={25}/>
                                        </Badge>
                                    </IconButton>
                                    <IconButton
                                        to={''}
                                        sx={styles.iconButton}
                                        aria-label="sign in"
                                        component={RouterLink}
                                    >
                                        <FaUser size={25}/>
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
