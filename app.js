const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const indexRoute = require('./routes/indexRoute');

const app = express();
app.use(express.static(path.join(__dirname + 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');
app.set('views', 'views');

// CUSTOM MIDDLEWARE
app.use(indexRoute);

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

app.listen(3200, () => {
    console.log('Server Running at 3200 PORT');
})