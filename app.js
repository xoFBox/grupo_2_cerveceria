const express = require('express')
const path = require('path')

const mainRoute = require('./src/routes/main')

const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')


// Rutas

app.use(mainRoute)



app.get('/productDetail', (req, res)=>{
    res.sendFile(path.join(__dirname + '/views/productDetail.html'))
})

app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname + '/views/login.html'))
})

app.post('/login', (req, res)=>{
    res.redirect('/')
})

app.get('/register', (req, res)=>{
    res.sendFile(path.join(__dirname + '/views/register.html'))
})

app.get('/productCart', (req, res)=>{
    res.sendFile(path.join(__dirname + '/views/productCart.html'))
})

app.listen(3000, ()=>{
    console.log(`Servidor express escuchando puerto 3000`)
})