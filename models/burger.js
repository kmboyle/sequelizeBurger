module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {

        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 30]
            }
        },
        devoured: { type: DataTypes.BOOLEAN, defaultValue: 0 },

        //date: DataTypes.DATE,
    }, {
        timestamps: true
    });
    Burger.associate = function(models) {
        Burger.hasOne(models.Customer, {

            onUpdate: "cascade"
        });
    }


    return Burger;
}