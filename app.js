const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const indexRoute = require('./routes/index');

const app = express();
app.use(bodyParser.json());

// Mongodb Connetion
mongoose.connect('mongodb://127.0.0.1:27017/curd_app_nodejs_mongodb', {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then( () => {
    console.log('DataBase Working Perfectly');
} )
.catch( () => {
    console.log('DataBase Failed to Connect');
} )

// My Custom Routes
app.use('/api', indexRoute);

// STARTING SERVER
app.listen(3200, () => {
    console.log('Server Running at 3200 PORT');
})