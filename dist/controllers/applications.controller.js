"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationsController = void 0;
const applications_services_1 = require("@/services/applications.services");
class ApplicationsController {
    static async getAllApplications(_, res) {
        try {
            const applications = await applications_services_1.ApplicationsServices.getAllApplications();
            return res.status(200).json(applications);
        }
        catch (error) {
            return res.status(500).json({ message: error });
        }
    }
    static async getApplicationById(req, res) {
        const { id } = req.params;
        try {
            const application = await applications_services_1.ApplicationsServices.getApplicationById(+id);
            if (application) {
                return res.status(200).json(application);
            }
            return res.status(404).json({ message: 'Application not found' });
        }
        catch (error) {
            return res.status(500).json({ message: error });
        }
    }
    static async createApplication(req, res) {
        const user = req.user;
        const { id, job, company, jobOfferUrl, applicationDate, cv, coverLetter } = req.body;
        try {
            const application = await applications_services_1.ApplicationsServices.createApplication({
                id,
                job,
                company,
                jobOfferUrl,
                applicationDate,
                cv,
                coverLetter,
                userId: user.id
            });
            return res.status(201).json(application);
        }
        catch (error) {
            return res.status(500).json({ message: error });
        }
    }
}
exports.ApplicationsController = ApplicationsController;
//# sourceMappingURL=applications.controller.js.map