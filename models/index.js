const User = require('./User');
const Stylist = require('./Stylist');
const Service = require('./Service');
const City = require('./City');
const Comment = require('./Comment');


User.hasMany(Stylist, {
    foreignKey: 'user_id'
});

Stylist.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
    hooks: true
});

Comment.belongsTo(Stylist, {
    foreignKey: 'stylist_id',
    onDelete: 'cascade',
    hooks: true
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
    hooks: true
});

Stylist.hasMany(Comment, {
    foreignKey: 'stylist_id',
    onDelete: 'cascade',
    hooks: true
})

Stylist.belongsTo(City, {
    foreignKey: 'city_id'
});

City.hasMany(Stylist, {
    foreignKey: 'city_id'
})

Service.belongsTo(Stylist, {
    foreignKey: 'stylist_id'
})

Stylist.hasMany(Service, {
    foreignKey: 'stylist_id'
})


module.exports = { User, Stylist, City, Service, Comment};
