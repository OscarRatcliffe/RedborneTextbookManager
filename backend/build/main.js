"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const endpoints_1 = require("./endpoints");
const app = (0, express_1.default)();
let port = 5000;
app.use((0, cors_1.default)({
    origin: "*"
}));
app.use(express_1.default.json());
(0, endpoints_1.endpoints)(app);
app.listen(port, () => {
    console.log(`API endpoint started on port ${port}`);
});
