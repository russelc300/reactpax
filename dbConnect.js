const mongoose = require('mongoose')

const connect = mongoose.connect('mongodb+srv://russel300:Drummerboy12@cluster0.mbdbiga.mongodb.net/paxapp' , {useNewUrlParser : true , useUnifiedTopology: true})

const connection = mongoose.connection

connection.on('error', err => console.log(err))

connection.on('connected' , ()=> console.log('Mongo DB Connection Succesful'))