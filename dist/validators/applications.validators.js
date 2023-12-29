"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applicationsValidators = void 0;
const express_validator_1 = require("express-validator");
exports.applicationsValidators = {
    creation: [
        (0, express_validator_1.check)('job').notEmpty().withMessage('A job is required'),
        (0, express_validator_1.check)('company').notEmpty().withMessage('A company is required'),
        (0, express_validator_1.check)('jobOfferUrl').optional().isURL().withMessage('Invalid jobOfferUrl'),
        (0, express_validator_1.check)('applicationDate').optional().isDate().withMessage('Invalid applicationDate'),
        (0, express_validator_1.check)('cv').optional().isString().withMessage('Wrong cv format'),
        (0, express_validator_1.check)('coverLetter').optional().isString().withMessage('Wrong coverLetter format'),
        (0, express_validator_1.check)('applicationStateId').optional().isInt().withMessage('Invalid applicationStateId')
    ],
    findById: [(0, express_validator_1.check)('id').notEmpty().withMessage('An id is required'), (0, express_validator_1.check)('id').isInt().withMessage('Invalid id')],
    update: [
        (0, express_validator_1.check)('id').notEmpty().withMessage('An id is required'),
        (0, express_validator_1.check)('id').isInt().withMessage('Invalid id'),
        (0, express_validator_1.check)('jobOfferUrl').optional().isURL().withMessage('Invalid jobOfferUrl')
    ],
    delete: [(0, express_validator_1.check)('id').notEmpty().withMessage('An id is required'), (0, express_validator_1.check)('id').isInt().withMessage('Invalid id')],
    scrap: [(0, express_validator_1.check)('jobOfferUrl').notEmpty().isURL().withMessage('A jobOfferUrl is required')]
};
//# sourceMappingURL=applications.validators.js.map