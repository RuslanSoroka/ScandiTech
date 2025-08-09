import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import {notFound, errorHandler} from "./middleware/errorMidlleware.js";
import productRoutes from "./routes/productsRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const port = process.env.PORT || 5000;

dotenv.config();

connectDB();
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use(cookieParser());


app.get("/", (req, res) => {
    console.log(`hey hey`);
});

app.use("/products", productRoutes);
app.use('/users', userRoutes);

app.use(notFound);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
