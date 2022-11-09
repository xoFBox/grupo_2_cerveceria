const express = require('express')
const path = require('path')

const mainRoute = require('./src/routes/main')
const productRoute = require('./src/routes/product')
const userRoute = require('./src/routes/user')

const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')


// Rutas

app.use('/', mainRoute);
app.use('/products', productRoute);
app.use('/user', userRoute);


app.listen(3000, ()=>{
    console.log(`Servidor express escuchando puerto 3000`)
})