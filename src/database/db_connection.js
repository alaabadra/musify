const {
    Pool
} = require('pg');
const url = require('url');
require('dotenv').config();
let DB_URL = process.env.HEROKU_POSTGRESQL_BRONZE_URL;
const allInfoConn = url.parse(DB_URL);
const [username ,password] = allInfoConn.auth.split(':');
const options ={
    host:allInfoConn.hostname,
    port :allInfoConn.port,
    database: allInfoConn.pathname.split('/')[1],
    max: process.env.MAX_DB_CONNECTION || 2,
    user: username,
    password :password,
    ssl: process.env.hostname !== 'localhost',
};

module.exports = new Pool(options);