const mongoose = require('mongoose');

const { Schema } = mongoose;

const SeachForStopReason = new Schema({
    c2h2: {
        type: String,
        required: true
    },
    c2h4: {
        type: String,
        required: true
    },
    ch4: {
        type: String,
        required: true
    },
    c2h6: {
        type: String,
        required: true
    },
    h2: {
        type: String,
        required: true
    },


}, {
    timestamps: true
});


module.exports = mongoose.model('SeachForStopReason', SeachForStopReason);