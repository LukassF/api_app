const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const model = require("./models/model");

app.get("/api", async (req, res) => {
  try {
    const data = await model.find();
    res.json(data);
  } catch (err) {
    console.error(err);
  }
});

mongoose.connect(process.env.DATABASE_CONNECTION);
var conn = mongoose.connection;
conn.on("connected", function () {
  console.log("database is connected successfully");
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
