const cloudinary = require("../middleware/cloudinary");
const Classpost = require("../models/Classpost");
const Comment = require("../models/Comment")

module.exports = {
    getProfile: async (req, res) => {
        try {
        const posts = await Classpost.find({ user: req.user.id });
        console.log(posts)
        res.render("dashboard.ejs", { posts: posts, user: req.user });
        } catch (err) {
        console.log(err);
        }
    },
    getFeed: async (req, res) => {
        try {
        const posts = await Classpost.find().sort({ createdAt: "desc" }).lean();
        res.render("classfeed.ejs", { posts: posts });
        } catch (err) {
        console.log(err);
        }
    },
    getPost: async (req, res) => {
        try {
        const post = await Post.findById(req.params.id);
        const comment = await Comment.find({post: req.params.id}).sort({createdAt: "desc"}).lean()
        res.render("post.ejs", { post: post, user: req.user, comment: comment });
        console.log(comment[0]._id)
        } catch (err) {
        console.log(err);
        }
    },
    createPost: async (req, res) => {
        try {
        // Upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);

        await Classpost.create({
            title: req.body.title,
            image: result.secure_url,
            cloudinaryId: result.public_id,
            caption: req.body.caption,
            likes: 0,
            user: req.user.id,
        });
        console.log("Post has been added!");
        res.redirect("/profile");
        } catch (err) {
        console.log(err);
        }
    },
    likePost: async (req, res) => {
        try {
        await Classpost.findOneAndUpdate(
            { _id: req.params.id },
            {
            $inc: { likes: 1 },
            }
        );
        console.log("Likes +1");
        res.redirect(`/post/${req.params.id}`);
        } catch (err) {
        console.log(err);
        }
    },
    deletePost: async (req, res) => {
        try {

            // Find post by id
            let post = await Classpost.findById({ _id: req.params.id });
            // Delete image from cloudinary
            await cloudinary.uploader.destroy(post.cloudinaryId);
            // Delete post from db
            await Post.remove({ _id: req.params.id });
            console.log("Deleted Post");
            res.redirect("/profile");
        } catch (err) {
            res.redirect("/profile");
        }
    },
};
