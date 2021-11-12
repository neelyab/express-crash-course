// import express
const express = require('express');
//import logger file
const logger = require('./middleware/logger');

// initialize express and store in a variable
const app = express();

//initilize middleware logger
app.use(logger);
//body parser middleware
app.use(express.json());
//handle url encoded data / form submissions
app.use(express.urlencoded({extended: false}));

// members API routes
app.use('/api/members', require('./routes/api/members'))


// create a port variable that will use whatever port for development or locally
const PORT = process.env.PORT || 5000;

//listen at port
app.listen(PORT, () => console.log(`server started on ${PORT}`));