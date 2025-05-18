const mongoose = require('mongoose');

function connectDB() {
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.MONGODB_URI, {
        dBname: process.env.DB_NAME,
        user: process.env.DB_USER_NAME,
        pass: process.env.DB_USER_PASSWORD,
    })
        .then(() => console.log("MongoDb is connect"))
        .catch(err => console.log(err));
}

module.exports = { connectDB };