const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "Thats an amazing post",
        },
    {
        comment_text: "That is an amazing post",
    },
    {
        comment_text: "What an amazing post",
    },
]

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;