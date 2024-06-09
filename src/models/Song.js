import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    artwork: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
});

const Song = mongoose.model("Song", songSchema);

export default Song;