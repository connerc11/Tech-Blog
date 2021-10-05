const { Post } = require('../models');

const postData = [{
    title: 'random post 1',

    post_url: 'hello',
    user_id: 1
},
{
    title: 'random post 2',

    post_url: 'hello',
    user_id: 2
},
{
    title: 'random post 3',
    
    post_url: 'hello',
    user_id: 3
},
]
const seedPosts = () => Post.bulkCreate(postData)

module.exports = seedPosts;