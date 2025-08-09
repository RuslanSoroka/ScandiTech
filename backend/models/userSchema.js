import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: true,
        },
    },
    { timestamps: true }
);
userSchema.methods.matchPassword = async function (encryptedPassword) {
    return await bcrypt.compare(encryptedPassword, this.password);
}

const User = mongoose.model("User", userSchema);

export default User;
