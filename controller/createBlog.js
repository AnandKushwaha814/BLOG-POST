const Blog = require("../models/Blog");

// Create a new blog post
exports.createBlog = async (req, res) => {
  // if (!req.body.title) {
  //   return res.status(400).send("Title fields are required");
  // } else if (!req.body.description) {
  //   return res.status(400).send("Description is required");
  // } else if (!req.body.author) {
  //   return res.status(400).send("Author is required");
  // }
  if (!req.body.title || !req.body.description || !req.body.author) {
    return res.status(400).send("All Fileds are required");
  }
  try {
    const blog = new Blog(req.body);
    await blog.save();
    return res.status(200).send(blog);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};
// Get all blog posts
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    return res.status(200).send(blogs);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

// Get blog by id
exports.getById = async (req, res) => {
  try {
    const id = await Blog.findById(req.params.id);
    return res.status(200).send(id);
  } catch {
    return res.status(404).send("Blog not found");
  }
};

// update
exports.updateBlog = async (req, res) => {
  try {
    const update = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!update) {
      return res.status(404).send("Blog not Found");
    }
    return res.status(200).send(update);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};
// Delete Blogs
exports.deleteBlog = async (req, res) => {
  try {
    const result = await Blog.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).send("Blog not found");
    }
    return res.status(200).send("Blog Delete Successfully");
  } catch (err) {
    return res.status(500).send(err.message);
  }
};
