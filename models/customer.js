module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 15]
            }
        },

    }, {
        timestamps: true
    });
    Customer.associate = function(models) {
        Customer.belongsTo(models.Burger, {
            foreignKey: {
                allowNull: false
            }
        });
    }

    return Customer;
}