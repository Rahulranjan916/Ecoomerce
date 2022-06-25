const mongoose = require("mongoose");



const connectDatabase = ( )=>{
    mongoose.connect("mongodb://localhost:27017/Ecommerce").then((data)=>{
            console.log("Mongodb connected with server:");
        }).catch((err)=>
        {
            console.log(err)
        })
}

module.exports = connectDatabase