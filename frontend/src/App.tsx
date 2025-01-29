import React from "react";
import Header from "./components/Header/Header";
import { Stack, Container, Box } from "@mui/material";
import Footer from "./components/Footer/Footer";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
    return (
        <Stack direction="column" minHeight={"100vh"}>
            <Header />
            <Box component="main" sx={{ flex: 1 }}>
                <Container maxWidth="xxl">
                    <HomeScreen />
                </Container>
            </Box>
            <Footer />
        </Stack>
    );
};

export default App;
