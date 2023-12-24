"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applicationsRoutes = void 0;
const express_1 = require("express");
const applications_controller_1 = require("@/controllers/applications.controller");
const authentication_1 = require("@/shared/authentication");
exports.applicationsRoutes = (0, express_1.Router)();
exports.applicationsRoutes.get('/', authentication_1.authByJWT, applications_controller_1.ApplicationsController.getAllApplications);
exports.applicationsRoutes.get('/:id', authentication_1.authByJWT, applications_controller_1.ApplicationsController.getApplicationById);
exports.applicationsRoutes.post('/', authentication_1.authByJWT, applications_controller_1.ApplicationsController.createApplication);
//# sourceMappingURL=applications.routes.js.map