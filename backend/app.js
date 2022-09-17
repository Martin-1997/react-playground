// We manually create the server in node.js
const http = require("http");
const fs = require("fs");
var favicon = require("serve-favicon");
const express = require("express");
const path = require("path");
const morgan = require("morgan");
var bodyParser = require("body-parser");

const countryRoutes = require("./routes/countryRoutes");
const airportRoutes = require("./routes/airportRoutes");
const airlineRoutes = require("./routes/airlineRoutes");
const flightRoutes = require("./routes/flightRoutes");

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

// This is required to receive JSON data from the frontend
// app.use(bodyParser.json());
app.use(express.json());

const cors = require("cors");
app.use(cors({ origin: true }));

// Import the required modules for the database
const sequelize = require("./db");
const Country = require("./models/country");
const Airport = require("./models/airport");
const Airline = require("./models/airline");
const Flight = require("./models/flight");

// https://sequelize.org/docs/v6/core-concepts/assocs/
// Automatically set up Foreign keys for One-To-Many
// Defining the associations ins pairs allows us to access methods on both objects
Country.hasMany(Airport);
Airport.belongsTo(Country);

Country.hasMany(Airline);
Airline.belongsTo(Country);

Airline.hasMany(Flight);
Flight.belongsTo(Airline);

// belongsTo  -> Foreign key defined in "Flight"
// https://sequelize.org/docs/v6/core-concepts/assocs/#multiple-associations-involving-the-same-models
Flight.belongsTo(Airport, {
  as: "StartAirport",
  foreignKey: {
    name: "startAirportId",
    // allowNull: false,
  },
});
Airport.hasMany(Flight, {
  as: "StartAirport",
  foreignKey: {
    name: "startAirportId",
    // allowNull: false,
  },
});

Flight.belongsTo(Airport, {
  as: "DestinationAirport",
  foreignKey: {
    name: "destinationAirportId",
    // allowNull: false,
  },
});
Airport.hasMany(Flight, {
  as: "DestinationAirport",
  foreignKey: {
    name: "destinationAirportId",
    // allowNull: false,
  },
});

// Fill the database with initial data
async function init_db() {
  await sequelize.sync();

  // Setup Countries
  const germany = await Country.create({ name: "Germany" });
  const peru = await Country.create({ name: "Peru" });
  const france = await Country.create({ name: "France" });

  // Setup Airports
  const ber = await Airport.create({
    name: "Berlin Brandenburg Airport",
    short_name: "BER",
    city: "Berlin",
  });
  await ber.setCountry(germany);

  const leipzig_airport = await Airport.create({
    name: "Leipzig/Halle Airport",
    short_name: "LEJ",
    city: "Leipzig",
  });
  await leipzig_airport.setCountry(germany);

  const charles_de_gaulle = await Airport.create({
    name: "Charles de Gaulle Airport",
    short_name: "CDG",
    city: "Paris",
  });
  await charles_de_gaulle.setCountry(france);

  const jorge_chavez = await Airport.create({
    name: "Aeropuerto Internacional Jorge Chávez",
    short_name: "LIM",
    city: "Lima",
  });
  await jorge_chavez.setCountry(peru);

  // Setup Airlines
  const air_france = await Airline.create({
    name: "Air France",
  });
  await air_france.setCountry(france);

  const lufthansa = await Airline.create({
    name: "Lufthansa",
  });
  await lufthansa.setCountry(germany);

  const condor = await Airline.create({
    name: "Condor",
  });
  await condor.setCountry(germany);

  // Setup Flights
  const LH789 = await Flight.create({
    code: "LH789",
    date: new Date(2022, 10, 13),
    price: 145.1,
    // startAirportId : ber.id,
    // destinationAirportId : charles_de_gaulle.di,
  });
  await LH789.setDestinationAirport(charles_de_gaulle);
  await LH789.setStartAirport(ber);
  await LH789.setAirline(lufthansa);

  const LH112 = await Flight.create({
    code: "LH112",
    date: new Date(2022, 11, 5),
    price: 580.0,
  });
  await LH112.setDestinationAirport(jorge_chavez);
  await LH112.setStartAirport(ber);
  await LH112.setAirline(lufthansa);

  const CD780 = await Flight.create({
    code: "CD780",
    date: new Date(2023, 1, 5),
    price: 70.99,
  });
  await CD780.setDestinationAirport(ber);
  await CD780.setStartAirport(leipzig_airport);
  await CD780.setAirline(condor);
}

/// force: true -> If a table already exists, it is dropped and added again
sequelize
  .sync({ force: true })
  .then((result) => {
    console.log("Connection to database successfull!");
    init_db();
  })
  .catch((err) => console.log("Unable to connect to the database:", err));


// App routing
app.use(countryRoutes);
app.use(airlineRoutes);
app.use(airportRoutes);
app.use(flightRoutes);

app.get("/", async (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send({ status: "success" });
  // res.send(JSON.stringify(data)); // Infers the type of content automatically and sets the Content-Type in the HTML header, the status code is also inferred automatically
});

// this is the default case which is used when no one of the ones above have been matched
app.use((req, res) => {
  res.status(404).send("Resource does not exist");
});

app.listen(process.env.APP_PORT);
