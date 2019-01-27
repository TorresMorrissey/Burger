var express = require("express");
const router = express.Router();
const burger = require ('../models/burger.js');

router.get("/", (req, res) => {
    burger.selectAll((data) => {
        const hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);

    });
});

router.post("/api/burger" , (req, res) => {
    burger.instertOne([
        "burger_name", "devoured"
    ], [req.body.burger_name.req.body.devoured], (data) => {
        res.json({ id: data.insertId });

    });
    
});

router.put("/api/burger/:id", (req, res) => {
    var condition = "id = "+ req.params.id;

    burger.updateONE({
        devoured: req.body.devoured
    }, condition, (data) => {
        if(data.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
        });
    });

    module.exports = router;