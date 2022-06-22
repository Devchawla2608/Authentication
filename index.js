const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const path = require('path');
const port = 8000;
const db = require('./config/mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport_local_strategy');
const MongoStore = require('connect-mongo');
const User = require('./models/user');

app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static('assets'));

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));

// mongo store is used to store the session cookie in the db
app.use(session({
    name: 'codeial',
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost:27017/contacts_list_db',
        dbName: 'db',
        autoRemove: 'disabled'
      })

}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use('/' , require('./routers'));

app.listen(port , function(err){
    if(err){
        console.log("There is an error");
        return;
    }
    console.log("Your server is running on port ", port);
})


