const Articulo = require("../models/articulos.model");
let response ={
    msg: "",
    exito: false
}
exports.create = function(req,res){
    let articulo = new Articulo({
        id: req.body.id,
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        tipo: req.body.tipo,
        inventario: req.body.inventario,
        novedad: req.body.novedad
    })

    articulo.save(function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al guardar el articulo"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El articulo se guardó correctamente"
        res.json(response)
    })
}
exports.find = function(req,res){
    Articulo.find(function(err,articulos){
        res.json(articulos)
    })
}
exports.findOne = function(req,res){
    Articulo.findOne({_id: req.params.id}, function(err,articulos){
        res.json(articulos)
    })
}
exports.update = function(req,res){
    let articulo = {
        id: req.body.id,
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        tipo: req.body.tipo,
        inventario: req.body.inventario,
        novedad: req.body.novedad
    }

    Articulo.findByIdAndUpdate(req.params.id, {$set: articulo}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al modificar el articulo"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El articulo se modifico correctamente"
        res.json(response)
    })
}
exports.remove = function(req,res){
    Articulo.findByIdAndRemove({_id: req.params.id}, function(err){
    if(err){
        console.error(err), 
        response.exito = false,
        response.msg = "Error al eliminar el articulo"
        res.json(response)
        return;
    }

    response.exito = true,
    response.msg = "El articulo se ha eliminado correctamente"
    res.json(response)
})
}