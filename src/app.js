const express = require('express'); 
const server = express(); 
const morgan = require('morgan');

//routes
const router = require("./routes/countryRouter");

server.use(express.json()); 
server.use(morgan('dev')); 

server.use("/countries", router);

module.exports = server; 