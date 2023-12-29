"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.poleEmploiScrapping = void 0;
const cheerio_1 = __importDefault(require("cheerio"));
const poleEmploiScrapping = async (data) => {
    const $ = cheerio_1.default.load(data);
    const job = $("h1 [itemprop='title']").text();
    const companyImageUrl = 'https://www.pole-emploi.fr/logos/img/partenaires/pemjc80.png';
    const company = 'Pôle Emploi';
    return {
        job,
        company,
        companyImageUrl
    };
};
exports.poleEmploiScrapping = poleEmploiScrapping;
//# sourceMappingURL=poleEmploi.js.map