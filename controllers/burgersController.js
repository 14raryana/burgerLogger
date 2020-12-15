const express = require("express");
const Burgers = require("../models/burger");
const burger = new Burgers;
const router = express.Router();


router.get("/", function(req, res) {
    // console.log(req);
    res.render("index");
});

router.get("/api/burgers", function(req, res) {
    console.log(req.query.burgerName);
});



module.exports = router;