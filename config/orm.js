var connection = require('./connection.js');

var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;

            }
            cb(result);
        });
    },


    insertOne: function (table, cols, cb) {

        var queryString = "INSERT INTO " + table;

        queryString += "(";
        queryString += cols.toString();
        queryString += ")";
        queryString += "Values (";
        queryString += printQuestionMarks(vals.length);
        queryString += "(";




        connection.query(queryString, vals, function (err, results) {
            if (err); {
                throw err;
            }


            cb(result);
        });
    },


    updateOne: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE" + table;

        queryString += "SET";
        queryString += objToSql(objColVals);
        queryString += "WHERE";
        queryString += condition;



        condition.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};
module.exports = orm;