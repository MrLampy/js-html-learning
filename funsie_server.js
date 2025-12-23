require("dotenv").config();

const express = require("express");
// experess responsible for handle API thing (bruh think of it as web server)
const cors = require("cors");
// wtf cors do????
// I guess it connect front end and back end bruh I dun really know
// oh allow them to talk between diff origin I think there is some policy something that doesn't allow them!!! (browser permissioner)
const mongoose = require("mongoose");
const multer = require("multer");
// multer read the dataform (pic+text)
const cloudinary = require("cloudinary").v2;

const Post = require("./model/post");

const app = express();
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));

// Cloudinary config
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Multer (memory)
const upload = multer({ storage: multer.memoryStorage() });

// Upload route
app.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const uploadResult = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        //upload the folder class on cloudinary
        { folder: "cards" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );

      stream.end(req.file.buffer);
    });

    const post = new Post({
      description: req.body.description,
      imageUrl: uploadResult.secure_url
    });

    await post.save();

    res.json(pst);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Get all cards
app.get("/posts", async (req, res) => {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
});
