const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// User -->  what kind of relationship to Post?  
// on foreignKey: 'user_id'

Post.hasMany(Comment, {
foreignKey: 'post_id',
onDelete: 'CASCADE'

})

// Comment relationship to Post
//foreign key post_id

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

// User relationship to Comment
// foreignKey user_id

module.exports = {
    User, Post, Comment
};