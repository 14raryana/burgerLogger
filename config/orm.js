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
                        resolve(burgerTableData);
                    }
                    else {
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

    insertOne() {

    }

    updateOne() {

    }
}

module.exports = ORM;