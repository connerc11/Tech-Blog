const { Post } = require('../models');
const seedUsers = require('./user-seeds');

const postData = [{
    title: 'random post 1',
    content: 'random text 1',
    user_id: 1
},
{
    title: 'random post 2',
    content: 'random text 2',
    user_id: 2
},
{
    title: 'random post 3',
    content: 'random text 3',
    user_id: 3
},
]
const seedPosts = () => Post.bulkCreate(postData)

module.exports = seedPosts;