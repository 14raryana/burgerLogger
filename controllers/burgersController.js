const express = require("express");
const Burgers = require("../models/burger");
const burger = new Burgers;
const router = express.Router();


// router.get("/", function(req, res) {
//     // console.log(req);
//     var home = true;
//     res.render("index", {home});
// });

router.get("/", function(req, res) {
    burger.getAll().then(function(burgers) {
        if(burgers.length > 0) {
            // console.log(burgers);
            burgers.forEach((burger) => {
                burger.nameId = burger.burgerName.replace(/\s+/g, '');
            });
            console.log(burgers)
            console.log("THIS IS THE BURGERS VAR IN ROUTER")
            res.render("index", {burgers});
        }
        // console.log({burgers});
    });
})



router.post("/api/burgers", function(req, res) {
    // console.log(req.body);
    burger.createBurger(req.body.burgerName)
    .then(function(response) {
        // console.log(response);
        res.json(response)
    })
});








// router.get("/api/burgers", function(req, res) {
//     var burgerName = req.query.burgerName;
//     // console.log(req.query.burgerName);
//     burger.checkBurgerInput(burgerName).then(function(response) {
//         // console.log(response.id);
//         // console.log("HOPEFULLY THIS WORKS");
//         console.log(response);
//         console.log("THIS IS THE RESPONSE IN THE API/BURGERS ROUTE")
//         var selectedBurger = response;
//         var shitFace = true;
//         // var selectedBurger = {
//         //     burger: response
//         // };
//         // console.log({selectedBurger})
//         // console.log(home);
//         console.log("hello")
//         // res.render("index", {selectedBurger});
//         console.log("hello2")
//         res.json(selectedBurger);
//         // res.render("index", {selectedBurger});
//     })
// });


// router.get("/api/burgers", function(req, res) {
//     console.log(req);
// })


module.exports = router;