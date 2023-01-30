// for development environment, read the environment paramaters from file. Don't forget to fill .env!!!

if (process.env.ENVIRONMENT !== 'production' || 'uat') {
    require('dotenv').config();
}
const mongoose = require('mongoose');
const express = require('express');
const Customer = require('./models/customer');

const env = process.env.ENVIRONMENT;
const mongouri = "mongodb+srv://" + process.env.MONGODBUSERNAME + ":" + process.env.MONGODBPASSWORD + "@" + process.env.MONGODHOST + "/" + process.env.DATABASE +"?retryWrites=true&w=majority";
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

console.log("Enviroment is " + env);

const customer = new Customer({
    name: 'John',
    industry: "marketing"
});


app.get('/', (req, res) => {
    res.send("Welcome!");
});

app.get('/api/customers', async (req, res) => {
    try{
        const result = await Customer.find();
        res.send({"customers": result});
    } catch(e){
        res.status(500).json({error: e.message});
    }
    
});

app.post('/api/customers', async (req, res) => {
    console.log(req.body);
    const customer = new Customer(req.body);
    try {
        await customer.save()
        res.status(201).json({customer});
    } catch(e){
        res.status(400).json({error: e.message});
    }
    
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