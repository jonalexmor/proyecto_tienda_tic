const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticulosSchema = new Schema({
    id:{type: Number, required: true, max:60},
    nombre:{type: String, required: true, max:40},
    categoria:{type: String, required: true, max:40},
    tipo:{type: String, required: true, max:15},
    inventario:{type: Number, required: false, max:70},
    novedad:{type: String, required: false, max:70}
});

module.exports = mongoose.model("articulos", ArticulosSchema);