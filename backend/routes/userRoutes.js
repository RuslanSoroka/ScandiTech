import expres from "express";
import {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    getUserByID,
    updateUser,
    updateUserProfile,
    deleteUser,
    getUsers
} from "../controllers/userController.js";
import {protect, admin} from '../middleware/authMiddleware.js'

const router = expres.Router();

router.route("/").post(registerUser).get(protect,admin,getUsers);
router.post("/logout", logoutUser);
router.post("/auth", authUser);
router.route("/profile").get(protect, getUserProfile).put(protect, updateUserProfile);
router.route("/:id").get(protect,admin,getUserByID).put(protect,admin,updateUser).delete(protect,admin,deleteUser);

export default router;
