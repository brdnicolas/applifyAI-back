"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkedinScrapping = void 0;
const cheerio_1 = __importDefault(require("cheerio"));
const text_1 = require("@/shared/utils/text");
const linkedinScrapping = async (data) => {
    const $ = cheerio_1.default.load(data);
    const job = $('h1').text();
    const companyImageUrl = $('.artdeco-entity-image.artdeco-entity-image--square-5').attr('data-delayed-url');
    const company = (0, text_1.cleanText)($('.topcard__org-name-link').text());
    return {
        job,
        company,
        companyImageUrl: companyImageUrl || ''
    };
};
exports.linkedinScrapping = linkedinScrapping;
//# sourceMappingURL=linkedin.js.map