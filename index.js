const express = require("express");
const mongoose = require("mongoose");
const blogRouter = require("./router/blogRouter");
const app = express();

app.use(express.json());
app.use("/api/blog", blogRouter);

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/blog-post", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Mongoose Connected....");
  })
  .catch((err) => console.log("Error...", err));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
