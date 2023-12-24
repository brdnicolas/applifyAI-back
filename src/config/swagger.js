"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var swagger_autogen_1 = require("swagger-autogen");
var doc = {
    info: {
        title: 'My API',
        description: 'Description'
    },
    host: 'localhost:3000'
};
var outputFile = './swagger-autogen.json';
var routes = ['./src/app.ts'];
/* NOTE: If you are using the express Router, you must pass in the 'routes' only the
root file where the route starts, such as index.js, app.js, routes.js, etc ... */
(0, swagger_autogen_1.default)(outputFile, routes, doc);
