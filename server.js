const express = require('express');
const app = express();
const db = require('./db')
require('dotenv').config

const bodyParser = require('body-parser');
app.use(bodyParser.json()) // req body
const PORT = process.env.PORT || 3000



app.get('/', (req, res) => {
    res.send('welcome to my sir, how i can help you')
})

const personRoutes = require('./routes/personRoute');
app.use('/person',personRoutes);

const menuItemRoutes = require('./routes/menuRoutes');
app.use('/menuItem',menuItemRoutes)


app.listen(PORT, () => {
    console.log('server is listening')
})