"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/Test', (req, res) => {
    res.send({
        "Test": 123,
        "OtherTest": "Wow data"
    });
});
app.listen(3000, () => {
    console.log("API endpoint started");
});
