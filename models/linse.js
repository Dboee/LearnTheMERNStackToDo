const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Need an id, name, description, price,
//Id is created by default in mongodb
const linse = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    price: {
        type: Number
        required: false
});

//To create a model, use the name of the model, and the schema with the properties of the model
// that  wil be inserted to the  database.
module.exports = mongoose.model('Linse', linse);