const express = require('express');
const app = express();
const db = require('./db')

const bodyParser = require('body-parser');
app.use(bodyParser.json()) // req body



app.get('/', (req, res) => {
    res.send('welcome to my sir, how i can help you')
})

const personRoutes = require('./routes/personRoute');
app.use('/person',personRoutes);

const menuItemRoutes = require('./routes/menuRoutes');
app.use('/menuItem',menuItemRoutes)

app.listen(3000, () => {
    console.log('server is listening')
})