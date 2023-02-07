const { DB } = require("../pkg/mysql/mysql");
const { DataTypes } = require("sequelize");

const Country = DB.define("countries", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Country.associate = (models) => {
  Country.hasMany(models.User, {
    as: "users",
    foreignKey: "country_id",
  });
};

module.exports = Country;
