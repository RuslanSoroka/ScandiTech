import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userSchema.js";
import jwt from "jsonwebtoken";

const authUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if (user && await (user.matchPassword(password))) {
        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {
            expiresIn: '30d'
        })
        res.cookie('jwt', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            sameSite: 'strict',
            maxAge: 30 * 24 * 60 * 60 * 1000
        })
        res.send({_id: user._id, name: user.name, email: user.email, isAdmin: user.isAdmin});
    } else {
        res.status(401);
        throw new Error("Invalid email or password");
    }
});

const registerUser = asyncHandler(async (req, res) => {
    res.send('register user');
});
const logoutUser = asyncHandler(async (req, res) => {
    res.send('logout user');
});
const getUserProfile = asyncHandler(async (req, res) => {
    res.send('get User profile');
});

const updateUserProfile = asyncHandler(async (req, res) => {
    res.send('update User profile');
});

const getUsers = asyncHandler(async (req, res) => {
    res.send('get Users');
});

const getUserByID = asyncHandler(async (req, res) => {
    res.send('get User by id');
});

const deleteUser = asyncHandler(async (req, res) => {
    res.send('delete Users');
});

const updateUser = asyncHandler(async (req, res) => {
    res.send('update User s');
});


export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getUserByID,
    deleteUser,
    updateUser
};
