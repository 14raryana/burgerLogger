const ORM = require("../config/orm");
const orm = new ORM;

class Burgers {
    async checkBurgerInput(burgerName) {
        return new Promise(function(resolve, reject) {
            orm.selectAll(burgerName)
            .then(function(response) {
                // console.log(response);
                // console.log("THIS IS WHAT YOU'RE LOOKING FOR")
                resolve(response);
            });
        })





        // console.log(burgerName);
        // console.log("this is in the Burgers class")
        // console.log(orm.selectAll(burgerName))
        // await orm.selectAll(burgerName)
        // .then(function(response) {
        //     console.log(response);
        //     console.log("THIS IS WHAT YOU'RE LOOKING FOR")
        // });
        // .then(function(response) {
        //     console.log(response);
        //     console.log("THIS IS THE RESPONSE IN THE BURGERS CLASS");
        // })
    }



    async getAll() {
        return new Promise(function(resolve, reject) {
            orm.getAll().then(function(response) {
                // console.log(response);
                resolve(response);
            });
        })
    }

    async createBurger(burgerName) {
        return await orm.create(burgerName).then(function(response) {
            // console.log(response);
            return response
        });
    }

    update() {
        orm.updateOne()
    }
}

module.exports = Burgers;