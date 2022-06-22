const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/contacts_list_db');
var db = mongoose.connection;
db.on('error' , console.error.bind(console , 'error connection to db'));
db.once('open' , function(){
    console.log("Successlly connected to the database")
})

