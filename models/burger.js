module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {

        burger_name: DataTypes.STRING,
        devoured: { type: DataTypes.BOOLEAN, defaultValue: 0 },
        date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    });
    return Burger;
}