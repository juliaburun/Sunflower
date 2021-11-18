// ************ Require's ************
const express = require('express');
const path = require('path');
const methodOverride = require('method-override'); // Para poder usar los métodos PUT y DELETE
    const {body, validationResult} = require("express-validator"); // Para validaciones


// ************ express() ************
const app = express();


// ************ Middlewares -************
app.use(express.urlencoded({ extended: false })); // Necesario para recibir los datos que vienen desde el formulario
app.use(express.json()); // Necesario para utilizar datos JSON
app.use(methodOverride('_method')); // Para poder usar los métodos PUT y DELETE


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

app.post('/loguear',[

    body('userbox', 'Ingrese el nombre de usuario')
        .exists()
        .isLength({min:5}),
    body('password_box', 'Ingrese su contraseña')
        .exists()
        .isLength({min:5})
], (req, res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        console.log(req.body)
        const valores = req.body
        const validaciones = errors.array()
        res.render('users/login', {validaciones: validaciones, valores: valores})
    }else{
        res.render('users/user')
    }
    

})


// ************ Set the server to listen ************
app.listen(3000, () => {
    console.log('Server running on port 3000', 'http://localhost:3000');
});



