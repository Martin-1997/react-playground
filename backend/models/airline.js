const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const airlineSchema = new Schema({
    name: {
        type : String,
        required : true,
    },
}, {timestamps: true})

const Airline = mongoose.model('Airline', airlineSchema)

module.exports = Airline

//    "id": "3",
//    "name": "Air France",
//    "country_id": 4