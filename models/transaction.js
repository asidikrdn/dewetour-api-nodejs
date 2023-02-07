const { DB } = require("../pkg/mysql/mysql");
const { DataTypes } = require("sequelize");

const Transaction = DB.define("transactions", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  qty: {
    type: DataTypes.INTEGER,
  },
  total: {
    type: DataTypes.INTEGER,
  },
  status: {
    type: DataTypes.STRING,
  },
  booking_date: {
    type: DataTypes.DATE,
  },
  midtrans_id: {
    type: DataTypes.STRING,
  },
  trip_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "trips",
      key: "id",
    },
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "users",
      key: "id",
    },
  },
});

Transaction.associate = (models) => {
  Transaction.belongsTo(models.Trip, {
    as: "trips",
    foreignKey: "trip_id",
  });
};

module.exports = Transaction;
