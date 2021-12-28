const User = require('./User');
const Stylist = require('./Stylist');
const Service = require('./Service');
const City = require('./City');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(Stylist, {
   foreignKey: 'post_id'
});

Comment.belongsTo(User, {
    foreignKey: 'comment_id'
});

Stylist.belongsTo(City, {
    foreignKey: 'city_id'
});

City.hasMany(Stylist, {
    foreignKey: 'id'
})

Stylist.belongsTo(Service, {
    foreignKey: 'id'
})

Service.hasMany(Stylist, {
    foreignKey: 'service_id'
})


module.exports = { User, Stylist, City, Service, Post, Comment};
