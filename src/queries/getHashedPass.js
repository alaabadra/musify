const connect = require('../database/db_connection');
const {
    hashPassword,
    comparePassword
} = require('../hashPass')

const gethashedPassword = (email, password, callcompare, callback) => {
    const text = 'SELECT password from users where email = $1'
    const value = [email];
    connect.query(text, value, (err, result) => {
        if (err) return callback(err);
        const hash = result.rows[0].password;
        callcompare(password, hash, callback);
    })
}

// gethashedPassword("israasulaiman@hotmail.com", "123", comparePassword, (err, res) => {
//     console.log(res);
// })

module.exports = gethashedPassword;
