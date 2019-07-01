const connect = require('../database/db_connection');
const {
    hashPassword,
    comparePassword
} = require('../hashPass');

const addUser = (firstName, lastName, email, password, callback) => {
    const hashedPassword = hashPassword(password)
    const text = 'INSERT INTO users (firstname, lastname, email, password, token) Values ($1, $2, $3, $4, $5)';
    const values = [firstName, lastName, email, hashedPassword, 'defult'];
    connect.query(text, values, callback);
}

module.exports = addUser;
