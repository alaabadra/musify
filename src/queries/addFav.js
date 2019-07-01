const connect = require('../database/db_connection');

const addFav = (userId, songId, callback) => {
    const text = 'INSERT INTO favorite(user_id, song_id) Values ($1, $2)';
    const value = [userId, songId];
    connect.query(text, value, callback);
}

module.exports = addFav;