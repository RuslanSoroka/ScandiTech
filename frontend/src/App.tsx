import Header from "./components/Header/Header";
import { Stack, Container, Box } from "@mui/material";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

const App = () => {
	return (
		<Stack direction="column" minHeight={"100vh"}>
			<Header />
			<Box component="main" sx={{ flex: 1, height: "100%" }}>
				<Container maxWidth="xxl" sx={{ height: "100%", paddingBlock: "1.5rem" }}>
					<Outlet />
				</Container>
			</Box>
			<Footer />
			<Toaster />
		</Stack>
	);
};

export default App;
