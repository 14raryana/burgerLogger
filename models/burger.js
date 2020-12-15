const ORM = require("../config/orm");
const orm = new ORM;

class Burgers {
    selectAll() {
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