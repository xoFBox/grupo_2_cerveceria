const { config } = require('dotenv')

config();

const dbPassword = process.env.DB_PASSWORD;

module.exports = dbPassword;