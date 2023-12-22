"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = exports.registerController = void 0;
const authentication_service_1 = require("./authentication.service");
const users_service_1 = require("../users/users.service");
const registerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, firstName, lastName } = req.body;
    if (!email || !password || !firstName || !lastName) {
        return res.status(400).json({ message: 'Missing fields' });
    }
    try {
        const isUserExist = yield (0, users_service_1.getUserByEmail)(email);
        if (isUserExist) {
            return res.status(409).json({ message: 'User already exists' });
        }
        const user = yield (0, users_service_1.createUser)(email, password, firstName, lastName);
        return res.status(201).json(user);
    }
    catch (error) {
        console.log(error, 'error');
        return res.status(400).json({ message: error });
    }
});
exports.registerController = registerController;
const loginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield (0, users_service_1.getUserByEmail)(email);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const isPasswordValid = yield (0, authentication_service_1.checkPasswordValidity)(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid password' });
        }
        const token = (0, authentication_service_1.generateJWTToken)({
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName
        });
        return res.status(200).json({ token });
    }
    catch (error) {
        return res.status(400).json({ message: error });
    }
});
exports.loginController = loginController;
