const express = require("express");
const router = express.Router();

// Define routes
const {
  createBlog,
  getAllBlogs,
  getById,
  updateBlog,
  deleteBlog,
} = require('../controller/createBlog')

router.post("/create", createBlog);
router.get("/getBlogs", getAllBlogs);
router.get("/getBlogById/:id", getById);
// router.put("/updateBlog/:id", updateBlog);  // Change to PUT and include the ID
router.delete("/deleteBlog/:id", deleteBlog);  // Change to DELETE and include the ID

module.exports = router;
