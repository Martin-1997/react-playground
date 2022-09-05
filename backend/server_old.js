// We manually create the server in node.js

const http = require('http');
const fs = require('fs');

const PORT = 6005
const HOST = 'localhost'
const DATAFILE = './data.json'


var data = null;
(async function queryData() {
    // Read in the json data
    fs.readFile(DATAFILE, (err, text) => {
        if (err) {
            console.log(err);
        } else {
            data = JSON.parse(text.toString());
            console.log(`Data was loaded from ${DATAFILE}`)
            // console.log(data)
        }
    })
})()

const server = http.createServer((req, res) => { // request we get and the response we send
    // this function runs each time a request is mode
    console.log(`${req.url} was requested`);
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Access-Control-Allow-Origin', '*');

    switch (req.url) {
        case '/':
            res.write(JSON.stringify(data));
            res.statusCode = 200;
            break;
        case '/flights':
            res.write(JSON.stringify(data.flights));
            res.statusCode = 200;
            break;
        case '/flight':
            // Use redirects in case someone types the wrong path
            res.setHeader('Location', '/flights')
            res.statusCode = 301;
            break;
        case '/airports':
            res.write(JSON.stringify(data.airports));
            res.statusCode = 200;
            break;
        case '/countries':
            res.write(JSON.stringify(data.countries));
            res.statusCode = 200;
            break;
        case '/airlines':
            res.write(JSON.stringify(data.airlines));
            res.statusCode = 200;
            break;
        default:
            res.write("Resource does not exist")
            res.statusCode = 404;
            break;
    }
    res.end();
});

server.listen(PORT, HOST, () => {
    // this function fires as soon as we listen for requests
    console.log(`Listening for requests on ${HOST}:${PORT}`)
})