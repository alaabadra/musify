const connect = require('../database/db_connection');

const addToken = (token, id, callBack )=>{
    const text = 'UPDATE users set token = $1 where users.user_id = $2';
    const Values = [token, id];
    connect.query(text, Values, callBack);
}

module.exports = addToken;