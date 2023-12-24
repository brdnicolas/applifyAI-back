"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const applications_1 = require("@/models/applications");
const users_1 = require("@/models/users");
users_1.User.hasMany(applications_1.Application, { foreignKey: 'userId' });
applications_1.Application.belongsTo(users_1.User);
//# sourceMappingURL=associations.js.map