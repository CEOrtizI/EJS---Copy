'use strict'

const express = require('express')
const path = require('path')
const route = require('./routes/index')
//Inicializations
const app = express()
app.use(express.static(path.join(__dirname,'public')))
//Settings
app.set('port', process.env.PORT || 8080)
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

//Middlewares

//Routes
app.use('/',route)

//Start server
app.listen(app.get('port'), () => {
    console.log(`Server listen at port ${app.get('port')}`)
})
