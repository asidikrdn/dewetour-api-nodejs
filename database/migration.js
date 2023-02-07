const User = require("../models/user");
const Country = require("../models/country");
const Trip = require("../models/trip");
const Image = require("../models/image");
const Transaction = require("../models/transaction");

const RunMigration = async () => {
  try {
    await User.sync();
    await Country.sync();
    await Trip.sync();
    await Image.sync();
    await Transaction.sync();
    console.log("Migration successfully");
  } catch (err) {
    console.error("Migration failed: ", err);
  }
};

module.exports = { RunMigration };
