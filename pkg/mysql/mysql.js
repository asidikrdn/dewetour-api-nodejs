// With MySQL Native Driver
// const mysql = require("mysql2");

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

// module.exports = {
//   DB,
//   DatabaseInit,
// };

// With Sequelize
const Sequelize = require("sequelize");

// .env initialization
require("../dotenv/dotenv")();

console.log(process.env.DB_NAME);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);

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

// uses async-await
const DatabaseInit = async () => {
  try {
    await DB.authenticate();
    console.log("Connected to MySQL");
  } catch (err) {
    console.error("Unable to connect to the database: ", err);
  }
};

// uses promises
// const DatabaseInit = () => {
//   DB.authenticate()
//     .then(() => {
//       console.log("Connected to database MySQL");
//     })
//     .catch((err) => {
//       console.error("Unnable to connect to the database: ", err);
//     });
// };

module.exports = { DB, DatabaseInit };
