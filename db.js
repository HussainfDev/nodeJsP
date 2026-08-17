const mongoose = require('mongoose');
const mongoUrl = 'mongodb://localhost:27017/hotels' // replace hotel to new database and create

mongoose
  .connect(mongoUrl)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('mongoDB server connected')
})
db.on('disconnected',()=>{
    console.log('mongoDB server disconnected')
})
db.on('error',(error)=>{
    console.error(`mongoDB connect error ${error}`)
})

//  export module

 module.exports = db;