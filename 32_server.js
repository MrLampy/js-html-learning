const express = require("express");
const app = express();

app.use(express.json());

app.post("/upload", (req, res) => {
  console.log(`${req.body.author} : ${req.body.message}`);
  res.send("ok");
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server listening on port 3000");
});