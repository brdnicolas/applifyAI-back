"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrapApplication = void 0;
const axios_1 = __importDefault(require("axios"));
const linkedin_1 = require("@/scripts/scrapping/linkedin");
const welcomeToTheJungle_1 = require("@/scripts/scrapping/welcomeToTheJungle");
const helloWork_1 = require("@/scripts/scrapping/helloWork");
const poleEmploi_1 = require("@/scripts/scrapping/poleEmploi");
const SCRAPP_URL_MATCHING = {
    'linkedin.com': linkedin_1.linkedinScrapping,
    'welcometothejungle.com': welcomeToTheJungle_1.welcomeToTheJungleScrapping,
    'hellowork.com': helloWork_1.helloWorkScrapping,
    'pole-emploi.fr': poleEmploi_1.poleEmploiScrapping
};
const scrapApplication = async (url) => {
    if (!url) {
        return {
            job: '',
            company: '',
            companyImageUrl: ''
        };
    }
    const rawHtml = await axios_1.default
        .get(url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
                '(KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36',
            'Content-Type': 'text/html',
            Accept: 'text/html'
        }
    })
        .then((response) => response.data);
    const scrappingKey = Object.keys(SCRAPP_URL_MATCHING).find((urlToMatch) => url.includes(urlToMatch));
    if (scrappingKey) {
        return await SCRAPP_URL_MATCHING[scrappingKey](rawHtml);
    }
    return {
        job: '',
        company: '',
        companyImageUrl: ''
    };
};
exports.scrapApplication = scrapApplication;
//# sourceMappingURL=main.js.map