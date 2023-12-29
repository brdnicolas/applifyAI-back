"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorkScrapping = void 0;
const cheerio_1 = __importDefault(require("cheerio"));
const helloWorkScrapping = async (data) => {
    const $ = cheerio_1.default.load(data);
    const job = $('h1 span').text();
    const companyImageUrl = $('.tw-h-7').attr('src');
    const company = $('h1 .tw-typo-m').text();
    return {
        job,
        company,
        companyImageUrl: companyImageUrl || ''
    };
};
exports.helloWorkScrapping = helloWorkScrapping;
//# sourceMappingURL=helloWork.js.map