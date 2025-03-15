import expres from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productSchema.js";
import {
    getProducts,
    getProductsById,
} from "../controllers/productController.js";

const router = expres.Router();

router.route("/").get(getProducts);
router.route("/:id").get(getProductsById);

export default router;
