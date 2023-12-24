"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class AuthService {
    static generateJWTToken = (payload) => {
        return jsonwebtoken_1.default.sign(payload, process.env.SECRET_KEY || '', { expiresIn: '1h' });
    };
    static checkPasswordValidity = async (password, hashedPassword) => {
        return bcrypt_1.default.compare(password, hashedPassword);
    };
}
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map