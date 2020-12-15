const ORM = require("../config/orm");
const orm = new ORM;

class Burgers {
    checkBurgerInput() {
        orm.selectAll()
    }

    insert() {
        orm.insertOne()
    }

    update() {
        orm.updateOne()
    }
}

module.exports = Burgers;