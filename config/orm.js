const { response } = require("express");
const connection = require("./connection");

class ORM {
    async selectAll(burgerName) {
        return new Promise(function(resolve, reject) {
            var burgerTableData;
            var burgerExists = false;
            const query = "SELECT * FROM burgers;";
            connection.query(query, (err, result) => {
                if(err) {
                    throw err;
                }
                else {
                    // console.log(result)
                    result.forEach((row) => {
                        // console.log(row.burgerName);
                        if(row.burgerName == burgerName) {
                            burgerExists = true;
                            burgerTableData = row;
                            // resolve(burgerTableData);
                        }
                        else {
                            // console.log("No matching burgers");
                            // resolve("No Matching Burgers Foun")
                        }
                    });
                    if(burgerExists) {
                        // console.log(burgerTableData);
                        // console.log("this is in the ORM")
                        resolve(burgerTableData);
                    }
                    else {
                        burgerTableData = "This burger does NOT exist"
                        // console.log(burgerTableData);
                        // console.log("this is the else statement in the ORM")
                        resolve({message: "Burger does not exist"})
                    }
                    
                    // resolve(burgerTableData);
                    // burgerTableData = result;
                    // console.log(burgerTableData);
                    // return {burgerTableData};
                }
                // console.log(burgerTableData);
                // resolve(burgerTableData);
            });
        });
    }

    async getAll() {
        return new Promise(function(resolve, reject) {
            const query = "SELECT * FROM burgers";
            connection.query(query, function(err, result) {
                if(err) {
                    console.log(err)
                }
                else {
                    // console.log(result);
                    resolve(result);
                }
            })
        })
    }
    
    
    create(burger) {
        return new Promise(function(resolve, reject) {
            const query = "INSERT INTO burgers(burgerName, devoured) VALUES(?,false);";
            connection.query(query, [burger], function(err, result) {
                if(err) {
                    console.log(err);
                }
                else {
                    var burgerInfo = {
                        burgerName: burger,
                        dbId: result.insertId
                    }
                    resolve(burgerInfo);
                }
            });
        })
    }

    updateOne() {

    }
}

module.exports = ORM;