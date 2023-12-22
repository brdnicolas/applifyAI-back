"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const authentication_routes_1 = require("./routes/authentication/authentication.routes");
const db_1 = require("./config/db");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.use('/', authentication_routes_1.authenticationRoutes);
(0, db_1.testDbConnection)();
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
