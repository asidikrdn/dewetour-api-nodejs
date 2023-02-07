const dotenv = require("dotenv");

// menonaktifkan file .env pada production mode
module.exports = () => {
  if (process.env.NODE_ENV !== "production") {
    return dotenv.config();
  }
};
