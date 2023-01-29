// for development environment, read the environment paramaters from file. Don't forget to fill .env!!!

if (process.env.ENVIRONMENT !== 'production' || 'uat') {
    require('dotenv').config();
}

const env = process.env.ENVIRONMENT;

console.log("Enviroment is " + env);

// connect to MongoDB
const mongoose = require('mongoose');

const mongouri = "mongodb+srv://" + process.env.MONGODBUSERNAME + ":" + process.env.MONGODBPASSWORD + "@" + process.env.MONGODHOST + "/?retryWrites=true&w=majority";

const express = require('express');
const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

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

app.post('/api/customers', (req, res) => {
    console.log(req.body);
    res.send({"recorded": req.body});
});

app.post('/', (req, res) => {
    res.send('This is a post request!');
});


const start = async() => {
    try{
        await mongoose.connect(mongouri);

        app.listen(PORT, () => {
            console.log('App listening on port: ' + PORT);
        });
    } catch(error) {
        console.log(error.message)
    }
};

start();