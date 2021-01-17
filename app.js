// app.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes')
const app = express();

// Set up mongoose connection

const mongoDB = "mongodb+srv://test:t2H0NxbaXTc89WIN@cluster0.dazk4.mongodb.net/cp-url-shortner?retryWrites=true&w=majority";

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes(app)

const port = process.env.PORT || 8080;

db.once('open', function () {
    console.log('Connected!');
    app.listen(port, () => {
        console.log('Server is up and running on port numner ' + port);
    });
});