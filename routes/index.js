const express = require('express')

const router = express.Router()
const bodyParser = require('body-parser')

router.use(bodyParser.json())

const data = require('../resources/files/data')
let mensaje= "REGISTRO EXITOSO"
const pets= new Map();

router.get('/',(req,res)=>{
    res.render('index',{pets:pets,title:"Página Principal"})
})

router.get('/about',(req,res)=>{
    res.render('about',{title:"Acerca de"})
})

router.get('/pets',(req,res)=>{
    res.render('pets',{pets:pets,title:"Control Mascotas"})
})

router.get('/insert',(req,res)=>{
    res.render('insert',{title:"Nuevo Registro", species:data.species,mensaje:true})
})

router.use(bodyParser.urlencoded({ extended: true }))

router.post('/insert',(req,res)=>{

    const{id,name,spec,age,phone,gender}=req.body
    if(pets.has(id)==false){
        pets.set(id,{name: name, spec: spec, age : age, phone : phone, gender: gender})
        res.redirect('/pets')
    }
    else{
        res.render('insert',{title:"Registro", species:data.species,mensaje:false})
    }
    
})
module.exports = router