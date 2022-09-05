const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countrySchema = new Schema({
    name: {
        type : String,
        required : true,
    },
}, {timestamps: true}) // this adds automatically timestamps when data is added

const Country = mongoose.model('Country', countrySchema)

module.exports = Country

// "id": 1,
// "name": "Germany"