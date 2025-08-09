import expres from "express";
import {
    getProducts,
    getProductsById,
} from "../controllers/productController.js";

const router = expres.Router();

router.route("/").get(getProducts);
router.route("/:id").get(getProductsById);

export default router;
