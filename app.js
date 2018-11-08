const express = require('express');
const app = express();

//First Middleware
app.use((req,res,next)=>{
    res.status(200).json({
        message:"Hello World"
    });
});

module.exports = app;