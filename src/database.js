
const mongoose = require('mongoose');
const urlDev = 'mongodb://localhost/calculator';
const mongoDB = 'mongodb+srv://francisco-savanapoint:Luisa@jaime1996@cluster0-jao6i.mongodb.net/savanapoint?retryWrites=true&w=majority';

mongoose.connect( urlDev, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
    }).then(() => {
        console.log('DB is connected')
    }).catch(() => {
        console.log('Error connection')
    })
 