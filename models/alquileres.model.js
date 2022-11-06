const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AlquileresSchema = new Schema({
    id:{type: Number, required: true, max:60},
    username:{type: String, required: true, max:40},
    fecha:{type: String, required: true, max:40}
});

module.exports = mongoose.model("alquileres", AlquileresSchema);