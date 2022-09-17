const express = require("express");
const Flight = require("../models/flight");
const Airport = require("../models/airport");
const Airline = require("../models/airline");

const router = express.Router();

router.get("/flights/:id", (req, res) => {
  Flight.findAll({
    where: {
      id: req.params.id,
    },
  })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

router.get("/flights", (req, res) => {
  Flight.findAll({
    include: [
      { model: Airport, as: 'DestinationAirport'},
      { model: Airport, as: 'StartAirport'},
      { model: Airline},
    ],
  })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

router.use(express.urlencoded({ extended: true }));
router.post("/flights", (req, res) => {
  Flight.create({
    name: req.query.name,
    code: req.query.code,
    city: req.query.date,
    price: req.query.price,
    destinationAirportId: req.query.destinationAirportId,
    startAirportId: req.query.startAirportId,
  })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

router.delete("/flights/:id", (req, res) => {
  const id = req.params.id;
  Flight.destroy({
    where: {
      id: id,
    },
  })
    .then((result) => {
      console.log(result);
      res.send(200);
    })
    .catch((err) => console.log(err));
});
module.exports = router;
