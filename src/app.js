// ************ Require's ************
const express = require('express');
const path = require('path');
const methodOverride = require('method-override'); // Para poder usar los métodos PUT y DELETE
const session = require('express-session')
const cookies = require('cookie-parser')


// ************ express() ************
const app = express();

const userLoggedMiddleware = require ('./middlewares/userLoggedMiddleware');


// ************ Middlewares -************
app.use(express.urlencoded({ extended: false })); // Necesario para recibir los datos que vienen desde el formulario
app.use(express.json()); // Necesario para utilizar datos JSON
app.use(methodOverride('_method')); // Para poder usar los métodos PUT y DELETE
app.use(session({
    secret:'esto es un secreto', 
    resave: false, 
    saveUninitialized: false
}));
app.use(cookies())
app.use(userLoggedMiddleware);


// ************ Template Engine ************
app.set("view engine", "ejs"); // Define que el motor que utilizamos es EJS
app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas


// ************ Route System require and use() ************
//requiriendo al indexRoutes
const indexRoutes=require('./routes/indexRoutes');

//requiriendo al productsRoutes
const productsRoutes=require('./routes/productsRoutes');

//requiriendo al cartRoutes
const cartRoutes=require('./routes/cartRoutes');

//requiriendo al loginRoutes
const usersRoutes=require('./routes/usersRoutes');
const { exists } = require('fs');

//Colocamos la carpeta pblic como estática
const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

// ***********links Pages************************
// index
app.use('/', indexRoutes);
// productos
app.use('/products', productsRoutes);
// carrito de compras
app.use('/cart', cartRoutes);
// login
app.use('/users', usersRoutes);

/* ********* Página de Error************* */
app.use ( (req, res, next) => {
    res.status(404).render('404');
})

// ************ Set the server to listen ************
app.listen(3000, () => {
    console.log('Server running on port 3000', 'http://localhost:3000');
});



