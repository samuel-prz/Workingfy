const express = require('express');
//HTTP request logger middleware for node.js
const morgan = require('morgan');

const app = express();


//middleware
app.use(morgan('dev'));


//Inicio del servidor
app.listen(3000, ()=>{
    console.log('server on port', 3000);
});