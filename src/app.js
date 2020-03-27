const cors = require("cors");
const express = require("express");
const addRoutes = require("./routes");
const { corsConfig } = require("./settings");

const app = express();

app.use(cors(corsConfig));
app.use(express.json());
addRoutes(app);

module.exports = app;
