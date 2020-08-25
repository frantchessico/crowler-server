const mongoose = require('mongoose');

const { Schema } = mongoose;

const NewContact = new Schema({
    firstName: String,
    lastName: String,
    brandName: String,
    phone: String,
    email: String,
    stateName: String,
    cityName: String,
    subject: String,
    message: String
}, {
    timestamps: true
});


module.exports = mongoose.model('Contacts', NewContact);