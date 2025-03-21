import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productSchema.js";

const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
});

const getProductsById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        return res.send(product);
    }

    res.status(404);
    throw new Error("Resource not found");
});

export { getProducts, getProductsById };
