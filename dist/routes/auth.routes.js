"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = require("express");
const auth_controller_1 = require("@/controllers/auth.controller");
exports.authRoutes = (0, express_1.Router)();
exports.authRoutes.post('/register', auth_controller_1.AuthController.register);
exports.authRoutes.post('/login', auth_controller_1.AuthController.login);
//# sourceMappingURL=auth.routes.js.map