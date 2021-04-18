const mysql = require("mysql");

const db = mysql.createConnection({
    host : "gamerecord-db.ci96t7ej8gvf.ap-northeast-2.rds.amazonaws.com",
    user : "admin",
    password : "12323568",
    database : "GameRecord_DB"
});

db.connect();

module.exports = db;