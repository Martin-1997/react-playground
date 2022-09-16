const express = require('express')
const Flight = require('../models/flights')

const router = express.Router();


app.get('/flights', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(JSON.stringify(data.flights)); // Infers the type of content automatically and sets the Content-Type in the HTML header, the status code is also inferred automatically
})

app.get('/flight', (req, res) => {
    res.redirect('flights');
})