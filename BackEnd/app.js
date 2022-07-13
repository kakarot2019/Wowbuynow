const express = require('express');
const app = express();

app.use(express.json());
//route imports
const product=require("./routes/productRoute")

//exporting app
module.exports = app;