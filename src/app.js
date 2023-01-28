//if process.env.ENVIRONMENT != 'production'
require('dotenv').config();
const env = process.env.ENVIRONMENT;

console.log("Enviroment is " + env);

const { v4: uuidv4 } = require('uuid');

console.log("UUID v4 is: " + uuidv4());

const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Welcome to my page </h1>');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);    
});