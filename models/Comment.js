const mongoose = require('mongoose');


const CommentSchema = new mongoose.Schema({

    comment: {
    type: String,
    required: true,
    },
    likes: {
        type: Number,
        required: true,
    },
    post: {
        type: String,
        ref: "Post",
    },  
    //! Added new schema properties to link comments to users - username for attribution, ID for show/hide delete button
    createdBy: {
        type: String,
        ref: "User",
    },
    createdById: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    //to show date when comment was created
    createdAt: {
        type: Date,
        default: Date.now,
    },

})
module.exports = mongoose.model('Comment', CommentSchema,'comments');

