const Stylist = require('./Stylist');
const Post = require('./Post');
const Service = require('./Service');
const City = require('./City');

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


module.exports = { Stylist, Post, City, Service};
