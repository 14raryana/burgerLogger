const { response } = require("express");
const connection = require("./connection");

class ORM {
    selectAll() {
        const query = "SELECT * FROM burgers;";
        connection.query(query, function(err, result) {
            if(err) {
                console.log(err);
            }
            else {
                console.log(result);
            }
            
        });
    }

    insertOne() {

    }

    updateOne() {

    }
}

module.exports = ORM;