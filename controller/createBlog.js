const Blog = require("../models/Blog");

// Create a new blog post
exports.createBlog = async (req, res) => {
  if (!req.body.title) {
    return res.status(400).send("Title fields are required");
  } else if (!req.body.description) {
    return res.status(400).send("Description is required");
  } else if (!req.body.author) {
    return res.status(400).send("Author is required");
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

// Delete Blogs
exports.deleteBlog = async (req, res) => {
  try {
    const result = await Blog.deleteOne({ _id: req.params.id });
    if (result.deletedCount === 0) {
      return res.status(404).send("Blog not found");
    }
    return res.status(204).send();
  } catch (err) {
    return res.status(500).send(err.message);
  }
};
