// connecting database 
const mongoose = require('mongoose');
// const mongoURI = "mongodb://127.0.0.1:27017/"
const mongoURI ="mongodb+srv://vidhiwalia16:f6gfLuYcbP2QaGYu@cluster2.uabiw.mongodb.net/"
const connectToMongo = () => {
    mongoose.connect(mongoURI).then(() =>
        console.log("Connected to Mongo Successfully")).catch((e) =>
        console.log(e.message))

}
module.exports = connectToMongo;
