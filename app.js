const express = require('express');
const bodyParser = require('body-parser');

const mongoConnect = require('./util/database').mongoConnect;
const appointment = require('./routes/appointment');





const app = express();

app.use(bodyParser.urlencoded({ extended: true })); //used for x-www-url-encoded <form>
app.use(express.json()) //used for application/json

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})



app.use(appointment);

app.use('/', (req, res, next) => {
    res.status(200).json({
        message: 'path not found...'
    })
})


mongoConnect(async () => {
    app.listen(process.env.PORT || 5000, () => console.log('Server running on port 5000!'))

});

