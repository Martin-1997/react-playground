// We manually create the server in node.js
const http = require("http");
const fs = require("fs");
var favicon = require("serve-favicon");
const express = require("express");
const path = require("path");
const morgan = require("morgan");
var bodyParser = require("body-parser");

const countryRoutes = require("./routes/countryRoutes");
const flightRoutes = require("./routes/countryRoutes");

// Create Express App
const app = express();
// set the favicon
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

// middleware -> everything which runs on the server between getting a request and sending the response. With express, these are all the app.use() and app.get() calls which are processed from top to button, until the end of the file is reached or the response is send beforehand (like with res.send()

// there are already many middleware packages existing, like "morgan" which is an more sophisticated logger

// middleware for logging purposes
// app.use((req, res, next) => {
//     console.log(`New ${req.method}-request was made to ${req.path} from ${req.hostname}`)
//     // Go to the next middleware code
//     next()
// })

// https://expressjs.com/en/resources/middleware/morgan.html
app.use(morgan("dev"));

// app.use(express.urlencoded({extended : true})) // This encodes all the URL dataa

// app.use(bodyParser.urlencoded({
//     extended: true
//   }));
// This is required to receive JSON data from the frontend
// app.use(bodyParser.json());
app.use(express.json());

const cors = require("cors");
app.use(cors({ origin: true }));

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

app.use(countryRoutes);
app.use(flightRoutes);

app.get("/", async (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send(JSON.stringify(data)); // Infers the type of content automatically and sets the Content-Type in the HTML header, the status code is also inferred automatically
});

// this is the default case which is used when no one of the ones above have been matched
app.use((req, res) => {
  res.status(404).send("Resource does not exist");
});

const sequelize = require("./db");
const Country = require("./models/country");
const Airport = require("./models/airport");
const Airline = require("./models/airline");
const Flight = require("./models/flight");

// Automatically set up Foreign keys
Country.hasMany(Airport);
Country.hasMany(Airline);

Flight.hasOne(Airport, {
  foreignKey: {
    name: "start_airport",
    allowNull: false,
  },
});

Flight.hasOne(Airport, {
    foreignKey: {
      name: "destination_airport",
      allowNull: false,
    },
  });

/// force: true -> If a table already exists, it is dropped and added again
sequelize
  .sync({ force: true })
  .then((result) => {
    console.log("Connection to database successfull!");
    Country.create({ name: "Peru" });
    Country.create({ name: "Brasil" });
    return Country.create({ name: "Germany" });
  })
  .then((country) => {
    return country.createAirport({
      short_name: "BER",
      name: "Flughafen Berlin Brandenburg",
      city: "Berlin",
    });
  })
  .then((airport) => {
    console.log(airport);
  })
  .catch((err) => console.log("Unable to connect to the database:", err));
