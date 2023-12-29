"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.welcomeToTheJungleScrapping = void 0;
const cheerio_1 = __importDefault(require("cheerio"));
const welcomeToTheJungleScrapping = async (data) => {
    const $ = cheerio_1.default.load(data);
    const job = $('h2').text().replace('D’autres offres vous correspondent !', '');
    const companyImageUrl = $('.sc-bXCLTC.dPVkkc img').attr('src');
    const company = $('.sc-bXCLTC.dPVkkc img').attr('alt');
    return {
        job,
        company: company || '',
        companyImageUrl: companyImageUrl || ''
    };
};
exports.welcomeToTheJungleScrapping = welcomeToTheJungleScrapping;
//# sourceMappingURL=welcomeToTheJungle.js.map