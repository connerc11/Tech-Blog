const { Post } = require('../models');

const postData = [{
    title: 'random post 1',
    body: 'hello',
    
},
{
    title: 'random post 2',
    body: 'hello',
},
{
    title: 'random post 3',
    body: 'hello',
},
]
const seedPosts = () => Post.bulkCreate(postData)

module.exports = seedPosts;