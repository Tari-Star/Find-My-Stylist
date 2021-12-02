const User = require('./User');
const Stylist = require('./Stylist');
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


module.exports = { User, Stylist, City, Service};
