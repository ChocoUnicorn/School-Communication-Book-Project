const express = require("express");
const router = express.Router();

const commentController = require("../controller/classcomments");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Comment Routes - simplified for now

router.post("/createComment/:postId", commentController.createComment);

router.put("/likeComment/:commentId/:postId", commentController.likeComment);

router.delete("/deleteComment/:commentId/:postId", commentController.deleteComment);

module.exports = router;