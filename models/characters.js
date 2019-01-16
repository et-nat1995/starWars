const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const starWars = new Schema({
    routeName: {
        type: String
    },
    name: {
        type: String
    },
    role: {
        type: String
    },
    age: {
        type: Number
    },
    forcePoints: {
        type: Number
    }
});

module.exports = Character = mongoose.model("characters", starWars);