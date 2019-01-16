import Axios from "axios";

const API = {
    getAllCharacter: function () {
        return Axios.get("/api/characters");
    },
    getByName: function (name) {
        return Axios.get("/api/characters/" + name);
    },
    addNewCharacter: function (body) {
        return Axios.post("/api/addCharacter", body);
    }
}

export default API;