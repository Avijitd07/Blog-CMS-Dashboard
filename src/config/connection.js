const mongoose = require('mongoose');

function connectDB() {
    mongoose.set('strictQuery', false);
    mongoose.connect("mongodb+srv://cluster0.8apnzz6.mongodb.net/", {
        dBname: 'BlogCMS',
        user: 'Avijit07',
        pass: 'Avijit1998',
        // useNewUrlParser: true
    })
        .then(() => console.log("MongoDb is connect"))
        .catch(err => console.log(err));
}

module.exports = connectDB;
// This code connects to a MongoDB database using Mongoose. It sets the 'strictQuery' option to false and provides the connection details such as database name, user, and password. If the connection is successful, it logs a success message; otherwise, it logs an error message.
// The connectDB function is exported for use in other parts of the application. This code is typically used in a Node.js application to establish a connection to the database before performing any database operations.
