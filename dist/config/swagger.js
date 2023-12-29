"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_autogen_1 = __importDefault(require("swagger-autogen"));
const doc = {
    info: {
        title: 'ApplifyAI API',
        description: 'API for ApplifyAI'
    },
    host: 'localhost:4000'
};
const outputFile = './swaggerConfig.json';
const routes = ['../app.ts'];
(0, swagger_autogen_1.default)(outputFile, routes, doc);
//# sourceMappingURL=swagger.js.map