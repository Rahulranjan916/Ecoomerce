const Product = require("../Models/productModel");
const express = require("express")

const bodyParser = require("body-parser")
//Create Product 
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
exports.createProduct =  (req,res)=> {
    console.log(res.body)
    const product =  Product.create(req.body);
    console.log(req.body)

    res.status(201).json({
        success:true,
        product
    });
}

exports.getAllProducts= (req, res) =>{
    console.log(req.body);
    res.status(200).json({message:"Route is working fine"})
}