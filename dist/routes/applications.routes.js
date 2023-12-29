"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applicationsRoutes = void 0;
const express_1 = require("express");
const applications_controller_1 = require("@/controllers/applications.controller");
const authentication_1 = require("@/shared/authentication");
const applications_validators_1 = require("@/validators/applications.validators");
exports.applicationsRoutes = (0, express_1.Router)();
exports.applicationsRoutes.get('/', authentication_1.authByJWT, applications_controller_1.ApplicationsController.getAllApplications);
exports.applicationsRoutes.get('/:id', applications_validators_1.applicationsValidators.findById, authentication_1.authByJWT, applications_controller_1.ApplicationsController.getApplicationById);
exports.applicationsRoutes.post('/', applications_validators_1.applicationsValidators.creation, authentication_1.authByJWT, applications_controller_1.ApplicationsController.createApplication);
exports.applicationsRoutes.post('/scrap', applications_validators_1.applicationsValidators.scrap, authentication_1.authByJWT, applications_controller_1.ApplicationsController.scrapApplication);
exports.applicationsRoutes.patch('/:id', applications_validators_1.applicationsValidators.update, authentication_1.authByJWT, applications_controller_1.ApplicationsController.updateApplication);
exports.applicationsRoutes.delete('/:id', applications_validators_1.applicationsValidators.delete, authentication_1.authByJWT, applications_controller_1.ApplicationsController.deleteApplication);
//# sourceMappingURL=applications.routes.js.map