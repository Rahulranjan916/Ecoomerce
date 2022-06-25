const express = require("express");
const { appendFile } = require("fs");

const App = express();

//Route import

const product = require("./routes/productRoute");
App.use("/api/v1",product)

module.exports = App