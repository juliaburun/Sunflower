// ************ Require's ************
const express = require('express');
const path = require('path');

// ************ express() ************
const app = express();


// ************ Middlewares -************


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
const loginRoutes=require('./routes/loginRoutes');


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
app.use('/login', loginRoutes);


// ************ Set the server to listen ************
app.listen(3000, () => {
    console.log('Server running on port 3000', 'http://localhost:3000');
});



