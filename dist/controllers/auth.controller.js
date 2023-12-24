"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const auth_service_1 = require("@/services/auth.service");
const users_services_1 = require("@/services/users.services");
class AuthController {
    static register = async (req, res) => {
        const { email, password, firstName, lastName } = req.body;
        if (!email || !password || !firstName || !lastName) {
            return res.status(400).json({ message: 'Missing fields' });
        }
        try {
            const isUserExist = await users_services_1.UsersService.getUserByEmail(email);
            if (isUserExist) {
                return res.status(409).json({ message: 'User already exists' });
            }
            const user = await users_services_1.UsersService.createUser(email, password, firstName, lastName);
            return res.status(201).json(user);
        }
        catch (error) {
            console.log(error, 'error');
            return res.status(400).json({ message: error });
        }
    };
    static login = async (req, res) => {
        const { email, password } = req.body;
        try {
            const user = await users_services_1.UsersService.getUserByEmail(email);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            const isPasswordValid = await auth_service_1.AuthService.checkPasswordValidity(password, user.password);
            if (!isPasswordValid) {
                return res.status(400).json({ message: 'Invalid password' });
            }
            const token = auth_service_1.AuthService.generateJWTToken({
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
    };
}
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map