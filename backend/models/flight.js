const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    name: {
        type : String,
        required : true,
    },
}, {timestamps: true})

const Flight = mongoose.model('Country', flightSchema)

module.exports = Country

// {
//     "id": 1,
//     "destination_id": 1,
//     "destination_name": "Berlin Brandenburg Airport",
//     "start_id": 3,
//     "start_name": "Charles de Gaulle Airport",
//     "airline_id": 3,
//     "airline_name": "Air France",
//     "date": "25-05-2022",
//     "price": 235
//   },
