"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanText = void 0;
const cleanText = (text) => {
    return text
        .trim()
        .replace(/\n\s*\n/g, '\n')
        .trim();
};
exports.cleanText = cleanText;
//# sourceMappingURL=text.js.map