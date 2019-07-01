const connect = require('../database/db_connection');

const checkUserEmail = (email, callback) => {
    const text = 'SELECT user_id, lastname, password from users where users.email = $1';
    const values = [email];
    connect.query(text, values, callback);
}


module.exports = checkUserEmail;
