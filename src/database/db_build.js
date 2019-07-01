const fs = require('fs');
const path = require('path');
const dbConnection = require('./db_connection');

const sqlPath = path.join(__dirname,'db_build.sql');
const onDbBuild = (cb) =>{
    dbConnection.query(sql,(err,res)=>{
        if(err) return cb(err);
        return cb(null,res);
    });
};
onDbBuild(() => {
    console.log('data build')
})

module.exports = onDbBuild;
