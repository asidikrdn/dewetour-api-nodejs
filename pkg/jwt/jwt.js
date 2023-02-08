require("../dotenv/dotenv")();
const jwt = require("jsonwebtoken");

exports.GenerateToken = (payload, expiredIn = "24h") => {
  const token = jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: expiredIn,
  });
  return token;
};
