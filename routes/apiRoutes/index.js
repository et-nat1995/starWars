const api = require("express").Router();
const mongoose = require("mongoose");
const db = require("../../models/index");
const Character = db.Character;

// Make routes here get,post,delete, put
api.get("/characters", function (req, res) {
    Character.find({}).then(data => {
        res.send(data);
    }).catch(err => {
        console.log(err);
    });
});

api.get("/characters/:name", function (req, res) {
    var name = req.params.name;

    Character.find({ name: name })
        .then(data => res.send(data))
        .catch(err => console.log(err));
})

api.post("/addCharacter", function (req, res) {
    console.log(req.body);
    Character.create(req.body).then(data => {
        res.send(data);
    }).catch(err => {
        console.log(err);
    })
})
module.exports = api;