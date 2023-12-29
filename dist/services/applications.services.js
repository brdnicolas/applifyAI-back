"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationsServices = void 0;
const applications_1 = require("@/models/applications");
const applicationStates_1 = require("@/models/applicationStates");
const main_1 = require("@/scripts/scrapping/main");
class ApplicationsServices {
    static async getAllApplicationsOfUser(userId) {
        return await applications_1.Application.findAll({
            where: {
                userId
            },
            include: {
                model: applicationStates_1.ApplicationStates,
                attributes: ['name']
            }
        });
    }
    static async getApplicationById(id) {
        return await applications_1.Application.findOne({
            where: {
                id
            },
            include: {
                model: applicationStates_1.ApplicationStates,
                attributes: ['name']
            }
        });
    }
    static async createApplication(application) {
        return await applications_1.Application.create(application);
    }
    static async updateApplication(id, application) {
        const applicationToUpdate = await applications_1.Application.findOne({
            where: {
                id
            },
            include: {
                model: applicationStates_1.ApplicationStates,
                attributes: ['name']
            }
        });
        const dataToUpdate = { ...application };
        delete dataToUpdate.id;
        delete dataToUpdate.userId;
        if (applicationToUpdate) {
            return await applicationToUpdate.update(dataToUpdate);
        }
        return null;
    }
    static async getApplicationDetailsFromUrl(jobOfferUrl) {
        return (0, main_1.scrapApplication)(jobOfferUrl);
    }
    static async deleteApplication(id, userId) {
        const application = await applications_1.Application.findOne({
            where: {
                id,
                userId
            }
        });
        if (application) {
            return await application.destroy();
        }
        throw new Error('Application not found');
    }
}
exports.ApplicationsServices = ApplicationsServices;
//# sourceMappingURL=applications.services.js.map