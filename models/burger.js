const ORM = require("../config/orm");
const orm = new ORM;

class Burgers {
    async checkBurgerInput(burgerName) {
        // console.log(burgerName);
        // console.log("this is in the Burgers class")
        // console.log(orm.selectAll(burgerName))
        await orm.selectAll(burgerName)
        .then(function(response) {
            console.log(response);
            console.log("THIS IS WHAT YOU'RE LOOKING FOR")
        });
        // .then(function(response) {
        //     console.log(response);
        //     console.log("THIS IS THE RESPONSE IN THE BURGERS CLASS");
        // })
    }

    insert() {
        orm.insertOne()
    }

    update() {
        orm.updateOne()
    }
}

module.exports = Burgers;