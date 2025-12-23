const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("Post", postSchema);
