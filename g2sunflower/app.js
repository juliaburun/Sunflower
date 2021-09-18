const express = require('express');
const path = require('path');
const app = express();

app.listen(3000, () => {
    console.log('Server running on port 3000');
});


const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath) );

app.get('/',(req, res)=> {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});