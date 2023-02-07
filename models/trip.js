const { DB } = require("../pkg/mysql/mysql");
const { DataTypes } = require("sequelize");

const Trip = DB.define("trips", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "countries",
      key: "id",
    },
  },
  accomodation: {
    type: DataTypes.STRING,
  },
  transportation: {
    type: DataTypes.STRING,
  },
  eat: {
    type: DataTypes.STRING,
  },
  day: {
    type: DataTypes.INTEGER,
  },
  night: {
    type: DataTypes.INTEGER,
  },
  date_trip: {
    type: DataTypes.DATE,
  },
  price: {
    type: DataTypes.INTEGER,
  },
  total_quota: {
    type: DataTypes.INTEGER,
  },
  available_quota: {
    type: DataTypes.INTEGER,
  },
  description: {
    type: DataTypes.STRING,
  },
});

Trip.associate = (models) => {
  Trip.belongsTo(models.Country, {
    as: "countries",
    foreignKey: "country_id",
  });
};

Trip.associate = (models) => {
  Trip.belongsTo(models.Image, {
    as: "images",
    foreignKey: "trip_id",
  });
};

module.exports = Trip;
