/**
 * Express router for managing comments.
 * @type {Router}
 */

/**
 * Retrieves all comments for a specific post.
 * @route GET /api/comments/:postId
 * @param {string} postId.params.required - The ID of the post
 * @returns {object} 200 - Array of comment objects
 * @returns {object} 500 - Error message if retrieval fails
 */

/**
 * Creates a new comment for a specific post.
 * @route POST /api/comments/:postId
 * @param {string} postId.params.required - The ID of the post
 * @param {string} content.body.required - The content of the comment
 * @param {string} userId.body.required - The ID of the user creating the comment
 * @returns {object} 201 - The newly created comment object
 * @returns {object} 500 - Error message if creation fails
 */

/**
 * Deletes a specific comment by its ID.
 * @route DELETE /api/comments/:commentId
 * @param {string} commentId.params.required - The ID of the comment to delete
 * @returns {object} 200 - Success message confirming deletion
 * @returns {object} 500 - Error message if deletion fails
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

// Hey GitHub Copilot, please implement the following routes for comments:
// 1. GET /api/comments/:postId - Retrieve all comments for a specific post
// 2. POST /api/comments/:postId - Create a new comment for a specific post
// 3. DELETE /api/comments/:commentId - Delete a specific comment by its ID

router.get("/api/comments/:postId", async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve comments." });
  }
});

router.post("/api/comments/:postId", async (req, res) => {
  try {
    const newComment = new Comment({
      postId: req.params.postId,
      content: req.body.content,    
        userId: req.body.userId })
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: "Failed to create comment." });
  }
});

router.delete("/api/comments/:commentId", async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.commentId);
    res.status(200).json({ message: "Comment deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete comment." });
  }
});