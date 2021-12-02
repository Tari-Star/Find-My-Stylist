const User = require('./User');
const Stylist = require('./Stylist');
const Service = require('./Service');
const City = require('./City');




Stylist.belongsTo(City, {
    foreignKey: 'city_id'
});

City.hasMany(Stylist, {
    foreignKey: 'city_id'
})

Service.belongsToMany(Stylist, {
    foreignKey: 'id'
})

Stylist.hasMany(Service, {
    foreignKey: 'id'
})


module.exports = { User, Stylist, City, Service};
