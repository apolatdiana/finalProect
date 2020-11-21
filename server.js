path = require('path')

//import express in our project using require key woord
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const fs = require('fs'); 
const multer = require('multer'); 
require('dotenv').config();
const expressSession = require('express-session')({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
})
const UserCredential = require('./models/UserCredential');

const loginRoutes = require('./routes/loginRoute');
const ufarmerRoutes = require('./routes/ufarmerRoute');
const foRegRoutes = require('./routes/foReg');
const userCredentials = require('./routes/userCredentials')
const app = express();

//db connection
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false

});

mongoose.connection
 .on('open', () => {
    console.log('Mongoose connection open');
 })
 .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
 });
    
 
//create an express application by calling the express() function


app.set('view engine', 'pug')// veiw engine helps us view on the brouser replacing html
 
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res, next) => {
    console.log('A new request recieved at' + Date.now());
    next();
})

//middleware setting
app.use(bodyParser.urlencoded({ extended: true }))

// Express session configs
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());



passport.use(UserCredential.createStrategy());
passport.serializeUser(UserCredential.serializeUser());
passport.deserializeUser(UserCredential.deserializeUser());


app.use('/', loginRoutes)
app.use('/', ufarmerRoutes)
app.use('/', foRegRoutes)
app.use('/', userCredentials)


//creates a server
app.listen(3000, () => console.log('listening on port 3000'));