


const mongoose = require('mongoose');

const DATABASE_URL = 'mongodb://localhost/flights'



mongoose.connect('mongodb://localhost/flights',


    {
        useNewUrlParser: true, 
        useCreateIndex: true, 
        useUnifiedTopology: true
    });


mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB')
});