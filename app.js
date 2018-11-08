const express = require('express');
const app = express();
const productsRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders')

//First Middleware
app.use('/products',productsRoutes);

//Second Middleware
app.use('/orders',orderRoutes);

module.exports = app;