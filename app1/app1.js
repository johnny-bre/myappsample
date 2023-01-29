if (process.env.ENVIRONMENT !== 'production' || 'uat') {
    require('dotenv').config();
}

const env = process.env.ENVIRONMENT;

console.log("Enviroment is " + env);