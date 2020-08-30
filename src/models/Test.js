const mongoose = require('mongoose');

const { Schema } = mongoose;

const Test = new Schema({
    idOfDataForTest: {
        type: String,
        required: true
    },
    c2h2Byc2h4: {
        type: String,
        required: true
    },
    ch4Byh2: {
        type: String,
        required: true
    },
    c2h4Byc2h6: {
        type: String,
        required: true
    },
    resultOfTest: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});


module.exports = mongoose.model('Test', Test);