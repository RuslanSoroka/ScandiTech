import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    console.log(`hey hey`);
});

app.get("/products", (req, res)=> {
    res.send(products);
})

app.get("/products/:id", (req, res)=> {
    const product = products.find(product => product._id === req.params.id)
    res.send(product);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
