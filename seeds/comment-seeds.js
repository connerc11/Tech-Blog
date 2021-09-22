const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "Thats an amazing post",
        user_id: 1,
        post_id: 3
    },
    {
        comment_text: "That is an amazing post",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "What an amazing post",
        user_id: 3,
        post_id: 1
    },
]

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;