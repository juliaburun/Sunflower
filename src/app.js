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

// requiriendo a la Api de products
const productsApiRoutes=require('./routes/api/productsApiRoutes')

// requiriendo a la Api de categories
const categoryApiRoutes=require('./routes/api/categoriesApiRoutes')

// requiriendo a la Api de sizes
const sizeApiRoutes=require('./routes/api/sizesApiRoutes')

//requiriendo al cartRoutes
const cartRoutes=require('./routes/cartRoutes');

//requiriendo al loginRoutes
const usersRoutes=require('./routes/usersRoutes');
const { exists } = require('fs');

// requiriendo a la Api de users
const usersApiRoutes=require('./routes/api/usersApiRoutes')

// requiriendo a la Api de roles
const rolesApiRoutes=require('./routes/api/rolesApiRoutes')


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
//api products
app.use('/api/products', productsApiRoutes);
//api category
app.use('/api/categories', categoryApiRoutes);
//api size
app.use('/api/sizes', sizeApiRoutes);
//api users
app.use('/api/users', usersApiRoutes);
//api roles
app.use('/api/roles', rolesApiRoutes);

/* ********* Página de Error************* */
app.use ( (req, res, next) => {
    res.status(404).render('404');
})


// ************ Set the server to listen ************
app.listen(3000, () => {
    console.log('Server running on port 3000', 'http://localhost:3000');
});



