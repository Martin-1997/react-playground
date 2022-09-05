const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const airportSchema = new Schema({
    name: {
        type : String,
        required : true,
    },
    city: {
        type : String,
        required : true,
    },
}, {timestamps: true})

const Airport = mongoose.model('Airport', airportSchema)

module.exports = Airport
//   "id": "1",
//   "name": "Berlin Brandenburg Airport",
//   "city": "Berlin",
//   "country_id": 1