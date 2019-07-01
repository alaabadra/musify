const connect = require('../database/db_connection');
const getFav = (userId, cb) => {
    const text = 'SELECT songName, singerNames from  songs innner join favorite on favorite.song_id = songs.song_id inner join users on favorite.user_id = users.user_id where users.user_id = $1';
    const value = [userId];
    connect.query(text, value, cb);
}

module.exports = getFav;