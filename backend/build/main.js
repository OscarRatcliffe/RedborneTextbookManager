"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
let port = 5000;
let startingText = "Starting Text";
app.use((0, cors_1.default)({
    origin: "*"
}));
app.use(express_1.default.json());
app.get('/Test', (req, res) => {
    res.send({
        "Test": 123,
        "OtherTest": startingText
    });
});
app.post('/Update', (req, res) => {
    startingText = req.body.toUpdate;
    console.log(`Text has been updated to ${startingText}`);
});
app.listen(port, () => {
    console.log(`API endpoint started on port ${port}`);
});
