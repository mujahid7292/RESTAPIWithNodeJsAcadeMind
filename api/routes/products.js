const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        Type:"GET",
        EndPoint:"/products",
        message:"Retrived All The Product"
    });
});


router.get('/:productId',(req,res,next)=>{
    const id = req.params.productId;
    console.log("Product Id: " + id);
    res.status(200).json({
        Type:"GET",
        EndPoint:"/products/"+id,
        message:"Retrived Single Product"
    });
});

router.post('/',(req,res,next)=>{
    res.status(201).json({
        Type:"POST",
        EndPoint:"/products",
        message:"Added Single Product"
    });
});

router.patch('/:productId',(req,res,next)=>{
    const id = req.params.productId;
    console.log("Product Id: " + id);
    res.status(200).json({
        Type:"PATCH",
        EndPoint:"/products/"+id,
        message:"Updated Single Product"
    });
});

router.delete('/:productId',(req,res,next)=>{
    const id = req.params.productId;
    console.log("Product Id: " + id);
    res.status(200).json({
        Type:"DELETE",
        EndPoint:"/products/"+id,
        message:"Deleted Single Product"
    });
});

module.exports = router;