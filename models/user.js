const { DB } = require("../pkg/mysql/mysql");
const { DataTypes } = require("sequelize");

const User = DB.define("users", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
  },
  gender: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
});

User.associate = (models) => {
  User.hasMany(models.Transaction, {
    as: "transactions",
    foreignKey: "user_id",
  });
};

module.exports = User;
