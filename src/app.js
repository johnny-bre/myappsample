//if process.env.ENVIRONMENT != 'production'
require('dotenv').config();
const env = process.env.ENVIRONMENT;

console.log("Enviroment is " + env);

const express = require('express');
const app=express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('<h1>Hello world! </h1>');
});

app.post('/', (req, res) => {
    res.send('This is a post request!');
});

app.listen(PORT, () => {
    console.log('App listening on port: ' + PORT);
});