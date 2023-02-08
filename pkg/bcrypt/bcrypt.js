const bcrypt = require("bcrypt");

exports.HashPassword = async (password, saltRound) => {
  try {
    // const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, saltRound);
    return hashedPassword;
  } catch (err) {
    return err;
  }
};

exports.ComparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};
