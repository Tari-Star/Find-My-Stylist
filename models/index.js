const User = require('./User');
const Stylist = require('./Stylist');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(Stylist, {
   foreignKey: 'post_id'
});

Comment.belongsTo(User, {
    foreignKey: 'comment_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'cascade',
    hooks: true
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'cascade',
    hooks: true
});



module.exports = { User, Stylist, Post, Comment};
