// We manually create the server in node.js
// https://stackoverflow.com/questions/10560241/how-to-use-nodemon-with-env-files
require('dotenv').config();
const http = require('http');
const fs = require('fs');
var favicon = require('serve-favicon');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
var bodyParser = require('body-parser')

const DATAFILE = './data.json';

// Load json example data
var data = require(DATAFILE);

const MONGO_DB_URI = `mongodb+srv://sgloieatgtg3e:${process.env.MONGO_DB_PASSWORD}@flightapp.rl4lnzc.mongodb.net/?retryWrites=true&w=majority`
const Country = require('./models/country')

// Mongoose -> ODM library Object Document Mapping library -> wraps the MongoDB API and uses models to let us work with objects in JS
// Schema -> definition of data and variables
// Model -> provides methods like GET, delete etc.
const mongoose = require('mongoose')
mongoose.connect(MONGO_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log("Connection to MongoDB successful!")
        // listen for requests

        app.listen(process.env.PORT)
    }).catch((err) => console.log(err))

// Create Express App
const app = express()
// set the favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));


// middleware -> everything which runs on the server between getting a request and sending the response. With express, these are all the app.use() and app.get() calls which are processed from top to button, until the end of the file is reached or the response is send beforehand (like with res.send()

// there are already many middleware packages existing, like "morgan" which is an more sophisticated logger

// middleware for logging purposes
// app.use((req, res, next) => {
//     console.log(`New ${req.method}-request was made to ${req.path} from ${req.hostname}`)
//     // Go to the next middleware code
//     next()
// })

// https://expressjs.com/en/resources/middleware/morgan.html
app.use(morgan('dev'));

// app.use(express.urlencoded({extended : true})) // This encodes all the URL dataa

// app.use(bodyParser.urlencoded({
//     extended: true
//   }));
// This is required to receive JSON data from the frontend
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors({ origin: true }));

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

// Test request to mongoose in middleware
app.get('/add_country', (req, res) => {
    const country = new Country({
        name: 'Peru',
    })
    // save the country to the MongoDB in the database
    country.save()
        .then((result) => {
            res.send(result)
        }).catch((err) => console.log(err))
})

app.get('/countries', (req, res) => {
    // Sort by "name" is ascending order, -1 for descending
    Country.find().sort({ name: 1 }).then((result) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.send(result)
    }).catch((err) => console.log(err))
})

app.get('/countries/:id', (req, res) => {
    Country.findById(req.params.id)
        .then((result) => {
            res.send(result)
        }).catch((err) => console.log(err))
})

app.post('/countries', (req, res) => {
    console.log("Post request:")
    console.log(req.body)
    const country = new Country(req.body)
    country.save().then((result) => {
        // res.redirect("/countries")
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.json({ redirect : '/admin'})
        res.end()
    }).catch((err) => console.log(err))
})

app.delete('/countries/:id', (req, res) => {
    const id = req.params.id;
    Country.findByIdAndDelete(id).then((result) => {
        // res.redirect("/countries")
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.json({ redirect : '/admin'})
        res.end()
    }).catch((err) => console.log(err))
})

app.use(express.urlencoded({ extended: true }))
app.post('/countries', (req, res) => {
    // expects data from a http post request like it could be send by html form in the browser
    req.body
})

app.get('/', async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(JSON.stringify(data)); // Infers the type of content automatically and sets the Content-Type in the HTML header, the status code is also inferred automatically
})

app.get('/flights', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(JSON.stringify(data.flights)); // Infers the type of content automatically and sets the Content-Type in the HTML header, the status code is also inferred automatically
})

app.get('/flight', (req, res) => {
    res.redirect('flights');
})

// this is the default case which is used when no one of the ones above have been matched
app.use((req, res) => {
    res.status(404).send("Resource does not exist")
})

// View engines allow us to serve custom html files in which variables, etc. can be inserted
// an example for a view engines is ejs
// this is also called "serverside rendering"


// const server = http.createServer((req, res) => { // request we get and the response we send
//     // this function runs each time a request is mode
//     console.log(`${req.url} was requested`);
//     res.setHeader('Content-Type', 'text/plain');
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     switch (req.url) {
//         case '/':
//             res.write(JSON.stringify(data));
//             res.statusCode = 200;
//             break;
//         case '/flights':
//             res.write(JSON.stringify(data.flights));
//             res.statusCode = 200;
//             break;
//         case '/flight':
//             // Use redirects in case someone types the wrong path
//             res.setHeader('Location', '/flights')
//             res.statusCode = 301;
//             break;
//         case '/airports':
//             res.write(JSON.stringify(data.airports));
//             res.statusCode = 200;
//             break;
//         case '/countries':
//             res.write(JSON.stringify(data.countries));
//             res.statusCode = 200;
//             break;
//         case '/airlines':
//             res.write(JSON.stringify(data.airlines));
//             res.statusCode = 200;
//             break;
//         default:
//             res.write("Resource does not exist")
//             res.statusCode = 404;
//             break;
//     }
//     res.end();
// });

// server.listen(process.env.PORT, HOST, () => {
//     // this function fires as soon as we listen for requests
//     console.log(`Listening for requests on ${HOST}:${process.env.PORT}`)
// })