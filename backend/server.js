import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import { notFound, errorHandler } from "./middleware/errorMidlleware.js";
import productRoutes from "./routes/productsRoutes.js";
dotenv.config();

connectDB();
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    console.log(`hey hey`);
});

app.use("/products", productRoutes);

app.use(notFound);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
