require('dotenv').config()
const mongoose = require('mongoose');
const mongoURI = process.env.URL


const connectToMongo = () => {
    
    mongoose.connect(mongoURI, {
    }).then(() => {
        console.log("Connection Done");
    }).catch((e) => {
        console.log(mongoURI);
        console.log("No Connection");
    });
}

module.exports = connectToMongo;