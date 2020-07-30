const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const session = require('express-session');

const indexRoute = require('./routes/indexRoute');

const app = express();
app.use(express.static(path.join(__dirname + 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');
app.set('views', 'views');

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

app.use(session({
    secret: 'curd-app',
    resave: true,
    saveUninitialized: true
}));

app.use(flash());

app.use( (req, res, next) => {
  res.locals.success_msg = req.flash('success_msg'),
  res.locals.error_msg = req.flash('error_msg'),
  next()
} )

// CUSTOM MIDDLEWARE
app.use(indexRoute);

// STARTING SERVER
app.listen(3200, () => {
    console.log('Server Running at 3200 PORT');
})