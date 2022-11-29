const express = require("express");
const app = express();
const db = require("./config/db");

require("dotenv").config();

const port = 3006;

app.listen(port, () => {
  db();
  console.log(`server is listening on port ${port}`);
});
