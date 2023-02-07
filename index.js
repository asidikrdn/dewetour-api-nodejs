// import express from "express"; // mengimport express
// import router from "./routers/index.js"; // mengimport router
// import dotenv from "dotenv"; // mengimport dotenv (untuk membaca file .env)
const express = require("express");
const { router } = require("./routers/index");
const { DatabaseInit } = require("./pkg/mysql/mysql");
const { RunMigration } = require("./database/migration");

// .env initialization
require("./pkg/dotenv/dotenv")();

// membuat object instance express
const app = express();

// database init
DatabaseInit();

// database migration
RunMigration();

// menggunakan router dengan path prefix /api/v1
app.use("/api/v1", router);

// deklarasi port (coba membaca dari env, jika kosong maka gunakan 3000 sebagai nilai default)
const port = process.env.PORT || 3000;

// menjalankan web server
app.listen(4135, () => {
  console.log(`Server started on port ${port}`);
});
