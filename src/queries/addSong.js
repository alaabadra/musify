const connect = require('../database/db_connection');

const addsong = (songName, singerName, callback) => {
    const text = 'INSERT INTO songs (songName,singerName) Values($1, $2)';
    const values = [songName, singerName];
    connect.query(text, values, callback);
}



module.exports = addsong;
