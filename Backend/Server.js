const App  = require("./App")

const dotenv = require("dotenv");
const connectDatabase = require("./config/database")
dotenv.config({path:"Backend/config/config.env"});

//connecting to database
connectDatabase();
App.listen(process.env.PORT,() => {

    console.log(`Server is working on https://localhost:${process.env.PORT}`)
})