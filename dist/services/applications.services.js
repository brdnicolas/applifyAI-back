"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationsServices = void 0;
const applications_1 = require("@/models/applications");
class ApplicationsServices {
    static async getAllApplications() {
        return await applications_1.Application.findAll();
    }
    static async getApplicationById(id) {
        return await applications_1.Application.findOne({
            where: {
                id
            }
        });
    }
    static async createApplication(application) {
        return await applications_1.Application.create(application);
    }
}
exports.ApplicationsServices = ApplicationsServices;
//# sourceMappingURL=applications.services.js.map