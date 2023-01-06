const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

// link for connecting to mongodb database 
const mongoURI = "mongodb://localhost:27017/mate";

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to mongo Sucessfully");
    })

}
module.exports = connectToMongo;
