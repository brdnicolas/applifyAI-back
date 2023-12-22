"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticationRoutes = void 0;
const express_1 = require("express");
const authentication_controller_1 = require("./authentication.controller");
exports.authenticationRoutes = (0, express_1.Router)();
exports.authenticationRoutes.post('/register', authentication_controller_1.registerController);
exports.authenticationRoutes.post('/login', authentication_controller_1.loginController);
