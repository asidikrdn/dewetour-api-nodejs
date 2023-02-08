const User = require("../models/user");

let AuthRepository = {};

// Register a new user
AuthRepository.Register = async (user) => {
  const newUser = await User.create(user);
  return newUser;
};

// Login user
AuthRepository.Login = async (email) => {
  const user = await User.findOne({
    where: {
      email: email,
    },
  });
  // console.log(user.dataValues);
  return user.dataValues;
};

module.exports = AuthRepository;
