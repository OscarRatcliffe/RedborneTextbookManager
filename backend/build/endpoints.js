"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endpoints = void 0;
const { readFileSync } = require("fs");
function endpoints(app) {
    app.get('/AllBooks', (req, res) => {
        let jsonString = readFileSync("../data/textbooks.json");
        let data = JSON.parse(jsonString);
        res.send(data);
    });
    app.get('/Test', (req, res) => {
        res.send("Test");
    });
    app.post('/Assign', (req, res) => {
        let department = req.body.newDepartment;
        let bookID = req.body.newDepartment;
    });
}
exports.endpoints = endpoints;
