const express = require("express");
const Pelicula = require("../db/models/pelicula");
const router = express.Router();
const Personaje = require("../db/models/personaje");


//create personaje
router.post("/", (req, res) => {
  Personaje.create({
    imagen: req.body.imagen,
    nombre: req.body.nombre,
    edad: req.body.edad,
    peso: req.body.peso,
    historia: req.body.historia
  }).then((personaje) => {
    res.json(personaje);
    console.log(req.body);
  });
});

//read


router.get('/:id', (req,res)=>{
    Personaje.findByPk(req.params.id).then(personaje=>{
        res.json( personaje.idpersonaje + ' ' + personaje.nombre)
        console.log(req.params.id)
    })
})

//update

router.put('/:id', (req,res)=> {
    Personaje.update({
    imagen: req.body.imagen,
    nombre: req.body.nombre,
    edad: req.body.edad,
    peso: req.body.peso,
    historia: req.body.historia
    },{
        where: {
            idpersonaje: req.params.id
        }
    }).then(personaje=>{
        res.json(req.body.nombre + ' fue actualizado')
    })
})

//delete

router.delete('/:id', (req,res)=>{
    Personaje.destroy({
        where:{
            idpersonaje: req.params.id
        }
    }).then (resultado=>{
        res.json (resultado)
    })
})



router.get('/', (req,res)=>{
    Personaje.findAll().then(personaje=>{
        res.json(personaje)
        
        personaje.forEach(personaje=>(console.log(personaje.nombre)))
    })
    
})

module.exports = router;
