const app= require('./app');
const dotenv = require('dotenv');
const connectdatabase= require('./config/database');

dotenv.config({path: "BackEnd/config/config.env"} );

//connecting db after env by using function
connectdatabase();

app.listen(process.env.PORT, () =>{
    console.log("Server running..!");
})