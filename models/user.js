const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Define your User Collection Objects Structure
//With datatypes
//We'll be using Auth0 for authentication in the future.
const UserSchema = new Schema({
    //THis is where the user will login
    //For Now we will be inserting test data
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    register_date: {
        type: Date,
        default: Date.now
    }
});

//Export the model on the mongoose.
//So this model will be inserted to the database.
module.exports = User = mongoose.model('user', UserSchema)