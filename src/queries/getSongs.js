const connect = require('../database/db_connection');

const getSongs = (cb)=>{
connect.query("SELECT songName, singerName FROM songs", cb)
}

module.exports = getSongs;