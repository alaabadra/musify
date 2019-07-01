const connect = require('../database/db_connection');
const getToken = (id, callBack) => {
    const text = `select token from users where users.user_id = $1`
    const value = [id];
    connect.query(text, value, callBack)
}

// getToken(1, (err, res) => {
//     console.log(111111111, err);
//     console.log(5555555555555555,res)
// })

module.exports = getToken;