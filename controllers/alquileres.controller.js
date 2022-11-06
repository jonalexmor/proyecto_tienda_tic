const Alquiler = require("../models/alquileres.model");
let response ={
    msg: "",
    exito: false
}
exports.create = function(req,res){
    let alquiler = new Alquiler({
        id: req.body.id,
        username: req.body.username,
        fecha: req.body.fecha
    })

    alquiler.save(function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al guardar el alquiler"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El alquiler se guardó correctamente"
        res.json(response)
    })
}
exports.find = function(req,res){
    Alquiler.find(function(err,alquileres){
        res.json(alquileres)
    })
}
exports.findOne = function(req,res){
    Alquiler.findOne({_id: req.params.id}, function(err,alquileres){
        res.json(alquileres)
    })
}
exports.update = function(req,res){
    let alquiler = {
        id: req.body.id,
        username: req.body.username,
        fecha: req.body.fecha
    }

    Alquiler.findByIdAndUpdate(req.params.id, {$set: alquiler}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al modificar el alquiler"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El alquiler se modifico correctamente"
        res.json(response)
    })
}
exports.remove = function(req,res){
    Alquiler.findByIdAndRemove({_id: req.params.id}, function(err){
    if(err){
        console.error(err), 
        response.exito = false,
        response.msg = "Error al eliminar el alquiler"
        res.json(response)
        return;
    }

    response.exito = true,
    response.msg = "El alquiler se ha eliminado correctamente"
    res.json(response)
})
}