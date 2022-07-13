const app= require('./app');
const dotenv = require('dotenv');

dotenv.config({path: "../BackEnd/config/config.env"} );

app.listen(process.env.PORT, () =>{
    console.log("Server running..!");
})