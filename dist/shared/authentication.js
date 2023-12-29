"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authByJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const users_1 = require("@/models/users");
const authByJWT = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Token non fourni' });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
        const userId = decoded.id;
        const user = await users_1.User.findByPk(userId);
        if (!user) {
            return res.status(401).json({ message: 'Utilisateur non trouvé' });
        }
        req.user = user;
        return next();
    }
    catch (error) {
        return res.status(403).json({ message: 'Token non valide' });
    }
};
exports.authByJWT = authByJWT;
//# sourceMappingURL=authentication.js.map