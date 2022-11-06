const mongoose = require("mongoose");   

const host = "localhost";
const port = "27017";
const db = "tienda_tic";

exports.mongoConnect = () => {
    const mongoStringConnecton = `mongodb://${host}:${port}/${db}`;
    mongoose.connect(mongoStringConnecton);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("Error", console.error.bind(console, "Mongodb connection error"))
}