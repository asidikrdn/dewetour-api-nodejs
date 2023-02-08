// .env initialization
require("../dotenv/dotenv")();
// const mysql = require("mysql2");
const Sequelize = require("sequelize");

// console.log(process.env.DB_NAME);
// console.log(process.env.DB_USER);
// console.log(process.env.DB_PASSWORD);

// With MySQL Native Driver
// const DB = mysql.createConnection({
//   host: DB_PORT,
//   port: process.env.DB_HOST,
//   user:"mysql",
//   password: "inirahasia",
//   database: "belajar-node",
// });
// const DatabaseInit = () => {
//   DB.connect((err) => {
//     if (err) throw err;
//     console.log("Connected to MySQL!");
//   });
// };

// With Sequelize
const DB = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
  }
);
const DatabaseInit = async () => {
  try {
    await DB.authenticate();
    console.log("Connected to MySQL");
  } catch (err) {
    console.error("Unable to connect to the database: ", err);
  }
};

module.exports = { DB, DatabaseInit };
