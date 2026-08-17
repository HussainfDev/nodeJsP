const mongoose = require('mongoose');
require('dotenv').config()
// const mongoUrl = 'mongodb://localhost:27017/hotels' // replace hotel to new database and create
// const mongoUrl = 'mongodb+srv://hussainshah9897_db_user:bindass777@cluster0.xcmut1q.mongodb.net/' // replace hotel to new database and create
 const mongoURL = process.env.MONGO_DB_URL ||  process.env.MONGO_DB_URL_LOCAL;

mongoose
  .connect(mongoURL)
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