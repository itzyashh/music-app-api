import mongoose from "mongoose";
import Song from "./Song.js"; 
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    favorites:[Song.schema]
});

const User = mongoose.model("User", userSchema);

export default User;
