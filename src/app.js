const cors = require("cors");
const express = require("express");
const addRoutes = require("./routes");
const { corsConfig } = require("./settings");

const app = express();

app.use(cors(corsConfig));
app.use(
  app.use(function(req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4400");

    // Request methods you wish to allow
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );

    // Request headers you wish to allow
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);

    // Pass to next layer of middleware
    next();
  })
);
app.use(express.json());
addRoutes(app);

module.exports = app;
