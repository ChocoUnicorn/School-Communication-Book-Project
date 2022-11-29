const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/comments");
// const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now


router.post('/newcomment/:postId', commentsController.createComment) //create
router.get('/deletecomment/:postId/:commentId', commentsController.deleteComment)//delete
router.get('/likecomment/:postId/:commentId', commentsController.likeComment)//edit


module.exports = router;
