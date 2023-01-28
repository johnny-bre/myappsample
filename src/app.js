//if process.env.ENVIRONMENT != 'production'
require('dotenv').config();
const env = process.env.ENVIRONMENT;

console.log("Enviroment is " + env);

const express = require('express');
const app=express();
const PORT = process.env.PORT;

const customers = [
    {
        "name": "Johnny B",
        "industry": "music"
    },
    {
        "name": "Joe",
        "industry": "networking"
    },
    {
        "name": "Sal",
        "industry": "sports"
 
    }
];

app.get('/', (req, res) => {
    res.send("Welcome!");
});

app.get('/api/customers', (req, res) => {
    res.send({"customers": customers});
});


app.post('/', (req, res) => {
    res.send('This is a post request!');
});

app.listen(PORT, () => {
    console.log('App listening on port: ' + PORT);
});