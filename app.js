const express = require('express');
const app = express();
const morgan = require('morgan'); //Logger Middleware
const productsRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders')

//First Middleware
app.use(morgan('dev'))

//Second Middleware
app.use('/products',productsRoutes);

//Third Middleware
app.use('/orders',orderRoutes);

//Custom Error Middleware 
//Execution of code will come to this Middleware if other Middleware failed
//to satisfy request. That means wrong url end point, sent from client.
app.use((req,res,next)=>{
    const error = new Error("Not Found"); //Create a node.js Error Object
    error.status = 404;
    next(error); //Serve execution to next middleware
})

//All Kind Of Error Handling Middleware
app.use((error,req,res,next)=>{
    res.status(error.status || 500); //If error body has status, than send that status
    res.json({
        error:{
            message:error.message
        }
    })
});

module.exports = app;