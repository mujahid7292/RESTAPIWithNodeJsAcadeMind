const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        Type:"GET",
        EndPoint:"/orders",
        message:"Retrived All The Orders"
    });
});


router.get('/:orderId',(req,res,next)=>{
    const id = req.params.orderId;
    console.log("Order Id: " + id);
    res.status(200).json({
        Type:"GET",
        EndPoint:"/orders/"+id,
        message:"Retrived Single Order"
    });
});

router.post('/',(req,res,next)=>{
    res.status(201).json({
        Type:"POST",
        EndPoint:"/orders",
        message:"Added Single Order"
    });
});

router.patch('/:orderId',(req,res,next)=>{
    const id = req.params.orderId;
    console.log("Order Id: " + id);
    res.status(200).json({
        Type:"PATCH",
        EndPoint:"/orders/"+id,
        message:"Updated Single Order"
    });
});

router.delete('/:orderId',(req,res,next)=>{
    const id = req.params.orderId;
    console.log("Product Id: " + id);
    res.status(200).json({
        Type:"DELETE",
        EndPoint:"/orders/"+id,
        message:"Deleted Single Order"
    });
});

module.exports = router;