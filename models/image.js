const { DB } = require("../pkg/mysql/mysql");
const { DataTypes } = require("sequelize");

const Image = DB.define("images", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  filename: {
    type: DataTypes.STRING,
  },
  trip_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "trips",
      key: "id",
    },
  },
});

Image.associate = (models) => {
  Image.belongsTo(models.Trip, {
    as: "trips",
    foreignKey: "trip_id",
  });
};

module.exports = Image;
