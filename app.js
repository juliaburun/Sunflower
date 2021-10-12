// Requiriendo Express
const express = require('express');
const app = express();
//requiriendo Path
const path = require('path');

app.set("view engine", "ejs");

//requiriendo al indexRoutes
const indexRoutes=require('./routes/indexRoutes');

//requiriendo al productsRoutes
const productsRoutes=require('./routes/productsRoutes');

//requiriendo al cartRoutes
const cartRoutes=require('./routes/cartRoutes');

//requiriendo al loginRoutes
const loginRoutes=require('./routes/loginRoutes');

//corriendo el servidor
app.listen(3000, () => {
    console.log('Server running on port 3000', 'http://localhost:3000');
});

//Colocamos la carpeta pblic como estática
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

// ***********enlazando las páginas************************
// index
app.use('/', indexRoutes);
// productos
app.use('/products', productsRoutes);
// carrito de compras
app.use('/cart', cartRoutes);
// login
app.use('/login', loginRoutes);


// Página login
app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});

// Página registro de usuario
app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});

/* // Página detalle producto
app.get('/productDetail', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productDetail.html'));
}); */

// carrito de compras
app.get('/productCart', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productCart.html'));
});

// checkout
app.get('/checkout', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/checkout.html'));
});