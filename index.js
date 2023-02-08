const express = require("express");
const formidable = require("express-formidable");
const { router } = require("./routers/index");
const { DatabaseInit } = require("./pkg/mysql/mysql");
const { RunMigration } = require("./database/migration");

// .env initialization
require("./pkg/dotenv/dotenv")();

// membuat object instance express
const app = express();

// database init & migration
DatabaseInit();
RunMigration();

// incoming request parser
// app.use(express.json());
app.use(formidable()); // form-data

// setup router with path prefix "/api/v1"
app.use("/api/v1", router);

// port declarations
const port = process.env.PORT || 3000;

// run web server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
