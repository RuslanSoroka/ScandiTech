import React from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	Box,
	IconButton,
	MenuItem,
	Menu,
	Container,
	Link,
	Badge,
} from "@mui/material";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import styles from "./Header.styles";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import { useLogoutMutation } from "../../redux/apiSlices/usersApiSlice";
import { logout } from "../../redux/slices/authSlice";
import UserAvatar from "../UI/UserAvatar";
import { isApiError } from "../../utils/helpers/typeGuards";
import toast from "react-hot-toast";

const Header = () => {
	const cartItemCount = useAppSelector((state) => state.cart.cartItems.length);
	const { userInfo } = useAppSelector((state) => state.auth);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const [logoutApi] = useLogoutMutation();

	const [hamburgerEl, setHamburgerEl] = React.useState<null | HTMLElement>(
		null
	);
	const open = !!hamburgerEl;

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setHamburgerEl(event.currentTarget);
	};

	const handleClose = () => {
		setHamburgerEl(null);
	};

	const handleLogout = async () => {
		try {
			await logoutApi({}).unwrap();
			dispatch(logout());
			navigate("/login");
		} catch (error) {
			if (isApiError(error)) {
				toast.error(error.data.message as string);
			} else {
				toast.error("Something went wrong");
			}
		}
		setHamburgerEl(null);
	};

	return (
		<Box component="header">
			<AppBar position="static">
				<Container maxWidth="xxl">
					<Toolbar sx={styles.toolbar}>
						<Box sx={styles.contentWrapper}>
							<Box sx={styles.logo}>
								<Link component={RouterLink} to="/" aria-label="Go to homepage">
									<Typography variant="h4" component="div">
										ScandiTech
									</Typography>
								</Link>
							</Box>
							<Box sx={styles.menuWrapper}>
								<Box sx={styles.menu}>
									<IconButton
										to={"/cart"}
										aria-label="shopping cart"
										sx={styles.iconButton}
										component={RouterLink}
										size={"large"}
									>
										<Badge badgeContent={cartItemCount} color="secondary">
											<FaShoppingCart size={25} />
										</Badge>
									</IconButton>
									{!!userInfo ? (
										<Box>
											<IconButton
												sx={styles.iconButton}
												id="menuButton"
												onClick={handleClick}
											>
												<UserAvatar userName={userInfo.name} />
											</IconButton>
											<Menu
												id="basic-menu"
												anchorEl={hamburgerEl}
												open={open}
												onClose={handleClose}
												MenuListProps={{
													"aria-labelledby": "menuButton",
												}}
											>
												<MenuItem component={RouterLink} to='/profile' onClick={handleClose}>Profile</MenuItem>
												<MenuItem onClick={handleLogout}>Logout</MenuItem>
											</Menu>
										</Box>
									) : (
										<IconButton
											component={RouterLink}
											to={!userInfo ? "/login" : "/"}
											sx={styles.iconButton}
											aria-label="sign in"
										>
											<FaUser size={25} />
										</IconButton>
									)}
								</Box>
							</Box>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
};

export default Header;
