const exp = require('constants')
const express = require('express')
const path = require('path')
const methodOverride = require('method-override')

const mainRoute = require('./src/routes/main')
const productRoute = require('./src/routes/product')
const userRoute = require('./src/routes/user')
const cookieParser = require('cookie-parser')

const app = express()

app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(cookieParser())

// Rutas

app.use('/', mainRoute);
app.use('/products', productRoute);
app.use('/user', userRoute);


app.listen(3000, ()=>{
    console.log(`Servidor express escuchando puerto 3000`)
})