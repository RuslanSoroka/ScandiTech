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
    useTheme,
    MenuItem,
    Menu,
    Container,
} from "@mui/material";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./Header.styles";

const Header = () => {
    const theme = useTheme();
    const classes = styles(theme);

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
                <Toolbar sx={classes.toolbar}>
                    <Stack
                        direction="row"
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        width="100%"
                        marginY={1}
                        gap={3}
                    >
                        <Box flex={1}>
                        <Typography variant="h4" component="div">
                            ScandiTech
                        </Typography>
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
                                    sx={classes.input}
                                />
                                <Button
                                    sx={{ height: 40 }}
                                    color="success"
                                    variant="outlined"
                                >
                                    Search
                                </Button>
                            </Stack>
                            <Box sx={classes.humburgerWrapper}>
                            <IconButton sx={classes.iconButton} aria-label="menu" onClick={handleClick}>
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
                                <MenuItem onClick={handleClose}>
                                    Cart
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    Sign In
                                </MenuItem>
                            </Menu>
                            </Box>    
                            <Stack
                                direction="row"
                                gap={1}
                                alignItems="center"
                                sx={classes.menu}
                                marginLeft={2}
                            >
                                <IconButton
                                    aria-label="add to shopping cart"
                                    sx={classes.iconButton}
                                >
                                    <FaShoppingCart /> Cart
                                </IconButton>
                                <IconButton
                                    sx={classes.iconButton}
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
