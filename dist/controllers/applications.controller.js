"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationsController = void 0;
const applications_services_1 = require("@/services/applications.services");
const express_validator_1 = require("express-validator");
const types_1 = require("@/shared/types");
class ApplicationsController {
    static async getAllApplications(req, res) {
        const user = req.user;
        try {
            const applications = await applications_services_1.ApplicationsServices.getAllApplicationsOfUser(user.id);
            return res.status(200).json(applications);
        }
        catch (error) {
            return res.status(500).json({ message: error });
        }
    }
    static async getApplicationById(req, res) {
        const { id } = req.params;
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(422).json(errors.array());
        }
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
        const errors = (0, express_validator_1.validationResult)(req);
        const { job, company, jobOfferUrl, applicationDate, companyImageUrl, applicationStateId } = req.body;
        if (!errors.isEmpty()) {
            return res.status(422).json(errors.array());
        }
        try {
            const application = await applications_services_1.ApplicationsServices.createApplication({
                job,
                company,
                jobOfferUrl,
                applicationDate,
                userId: user.id,
                companyImageUrl,
                applicationStateId: applicationStateId || types_1.EApplicationState.applied
            });
            return res.status(201).json(application);
        }
        catch (error) {
            return res.status(500).json({ message: error });
        }
    }
    static async updateApplication(req, res) {
        const { id } = req.params;
        const errors = (0, express_validator_1.validationResult)(req);
        const { job, company, jobOfferUrl, applicationDate, cv, coverLetter, applicationStateId } = req.body;
        if (!errors.isEmpty()) {
            return res.status(422).json(errors.array());
        }
        try {
            const application = await applications_services_1.ApplicationsServices.updateApplication(+id, {
                job,
                company,
                jobOfferUrl,
                applicationDate,
                cv,
                coverLetter,
                applicationStateId: applicationStateId || types_1.EApplicationState.applied
            });
            if (application) {
                return res.status(200).json(application);
            }
            return res.status(404).json({ message: 'Application not found' });
        }
        catch (error) {
            return res.status(500).json({ message: error });
        }
    }
    static async scrapApplication(req, res) {
        const { jobOfferUrl } = req.body;
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(422).json(errors.array());
        }
        try {
            const applicationDetails = await applications_services_1.ApplicationsServices.getApplicationDetailsFromUrl(jobOfferUrl);
            return res.status(200).json(applicationDetails);
        }
        catch (error) {
            return res.status(500).json({ message: error });
        }
    }
    static async deleteApplication(req, res) {
        const { id } = req.params;
        const user = req.user;
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(422).json(errors.array());
        }
        try {
            await applications_services_1.ApplicationsServices.deleteApplication(+id, user.id);
            return res.status(200).json({ message: 'Application deleted' });
        }
        catch {
            return res.status(404).json({ message: 'Application not found' });
        }
    }
}
exports.ApplicationsController = ApplicationsController;
//# sourceMappingURL=applications.controller.js.map