const product = require("../models/productmodels");

//create product-- Admin .. this line creates a products following schema and displays it in json
exports.createProduct = async(req,res,next) =>{
    const product = await product.create(req.body);
    req.status(201).json({
        success:true,
        product
    })
}

//get all products-- this line finds all products following schema and displays it in json
exports.getAllProducts = async(req,res) => {
    const products = await product.find();


    res.status(200).json({
        success:true,
        products
    })
}

//get product details
exports.getproductdetails = async(req,res,next) =>{
    const product = await product.findById(req.params.id);
    //if pdt not found
    if(!product){
        return res.status(500).json({
            success:false,
            message: "product not found"
        })
    }
    res.status(200).json({
        success: true,
        product
    })
    
}

//update pdts -- Admin
exports.updateproducts = async(req,res,next) =>{
    let product = product.findById(req.params.id);
    //if pdt not found
    if(!product){
        return res.status(500).json({
            success:false,
            message: "product not found"
        })
    }
    //else update
    product = await product.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
        runValidators:true,
        useFindAndModify: false
    });
    //show pdt after update
    res.status(200).json({
        success: true,
        product
    })
}

//delete pdts -- Admin
exports.deleteproduct = async(req,res,next) =>{
    const product = await product.findById(req.params.id);
    //if pdt not found
    if(!product){
        return res.status(500).json({
            success:false,
            message: "product not found"
        })
    }
    //else delete
    await product.remove();
    //show pdt after update
    res.status(200).json({
        success: true,
        message: "product deleted"
    })
    
}

//