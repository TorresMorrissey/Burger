var mySql = require('mysql');
var connection;

// if(process.env) {
    // connection = mySql.createConnection(process.env);
// } else {
    connection = mySql.createConnection({
        host: "localhost", 
        port: 3306,
        user: "root",
        password: "root",
        database: "burgers_db"
    });
// }

connection.connect(function(err) {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id" + connection.threadId);
});

module.exports = connection;