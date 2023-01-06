const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/mate";

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to mongo Sucessfully");
    })

}
module.exports = connectToMongo;