const User = require('./User');
const Stylist = require('./Stylist');
const Service = require('./Service');
const City = require('./City')

User.hasMany(Post, {
    foreignKey: 'user_id'
});

Stylist.hasMany(Post, {
    foreignKey: 'user_id'
})




module.exports = { User, Stylist, City, Service};
