const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect('mongodb://127.0.0.1/learn_odeJS_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB successfully');
    }
    catch(error){
        console.log('Failed to connect to MongoDB:', error);
    }   
}

module.exports = {connect};