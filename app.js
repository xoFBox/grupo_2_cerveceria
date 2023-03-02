const express = require('express')
const methodOverride = require('method-override')
const session = require('express-session')
const cors = require('cors');

const mainRoute = require('./src/routes/main')
const productRoute = require('./src/routes/product')
const userRoute = require('./src/routes/user')
const apiProductsRouter = require('./src/routes/api/apiProductsRouter')
const apiUserRouter = require('./src/routes/api/apiUserRoutes')
const cookies = require('cookie-parser')
const userLogueado = require('./src/middlewares/userLoguedo')

const app = express()

app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use(session({
    secret: 'shhh', 
    resave: false,
    saveUninitialized: false,
}))



app.use(cookies())
app.use(userLogueado)

// Rutas

app.use('/', mainRoute);
app.use('/products', productRoute);
app.use('/user', userRoute);

// api

app.use(apiProductsRouter);
app.use(apiUserRouter);


app.listen(3001, ()=>{
    console.log(`Servidor express escuchando puerto 3001`)
})