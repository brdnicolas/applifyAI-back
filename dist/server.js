"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const http_1 = require("http");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const startServer = (app) => {
    const httpServer = (0, http_1.createServer)(app);
    return httpServer.listen({ port: process.env.PORT || 4000 }, () => {
        process.stdout.write(`⚙️ Application Environment: ${process.env.NODE_ENV}\n`);
        process.stdout.write(`⏱ Started on: ${Date.now()}\n`);
        process.stdout.write(`🚀 TEN-STACK-API Server ready at http://localhost:${process.env.PORT || 4000}\n`);
    });
};
exports.startServer = startServer;
//# sourceMappingURL=server.js.map