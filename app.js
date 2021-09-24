// Requiriendo Express
const express = require('express');
const app = express();
//requiriendo Path
const path = require('path');

//corriendo el servidor
app.listen(3000, () => {
    console.log('Server running on port 3000', 'http://localhost:3000');
});

//Colocamos la carpeta pblic como estática
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

// ***********enlazando las páginas************************
// Página inicio
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});

// Página login
app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});

// Página registro de usuario
app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});

// Página detalle producto
app.get('/products', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/products.html'));
});

// carrito de compras
app.get('/cart', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/cart.html'));
});

// checkout
app.get('/checkout', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/checkout.html'));
});