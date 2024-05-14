// Create web server for comment

// Import express module
const express = require('express');

// Import comment controller
const commentController = require('../controllers/commentController');

// Create express router
const router = express.Router();

// Handle GET request to get all comments
router.get('/', commentController.getAllComments);

// Handle GET request to get comment by id
router.get('/:id', commentController.getCommentById);

// Handle POST request to add new comment
router.post('/', commentController.addComment);

// Handle PUT request to update comment by id
router.put('/:id', commentController.updateComment);

// Handle DELETE request to delete comment by id
router.delete('/:id', commentController.deleteComment);

// Export router
module.exports = router;