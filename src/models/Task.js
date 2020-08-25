const {Schema, model } = require('mongoose');

const taskSchema = new Schema({
    // uid: String,
    title: String,
    description: String,

}, {  timestamps: true});

module.exports = model('Task', taskSchema);
