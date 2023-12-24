"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const users_1 = require("@/models/users");
class UsersService {
    static createUser = async (email, password, firstName, lastName) => {
        return users_1.User.create({ email, password, firstName, lastName });
    };
    static getUserByEmail = async (email) => {
        return users_1.User.findOne({ where: { email } });
    };
}
exports.UsersService = UsersService;
//# sourceMappingURL=users.services.js.map