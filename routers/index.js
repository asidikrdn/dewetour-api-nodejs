const express = require("express");
const { auth } = require("./auth");
const { trip } = require("./trip");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

auth(router);
trip(router);

module.exports = { router };
// menggunakan module export karena fungsi router juga digunakan dibawah deklarasinya, jika menggunakan exports secara langsung, maka fungsi router tersebut tidak dapat digunakan di file yang sama
