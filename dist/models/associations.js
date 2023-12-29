"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const applications_1 = require("@/models/applications");
const users_1 = require("@/models/users");
const applicationStates_1 = require("@/models/applicationStates");
users_1.User.hasMany(applications_1.Application, { foreignKey: 'userId' });
applications_1.Application.belongsTo(users_1.User);
applicationStates_1.ApplicationStates.hasMany(applications_1.Application, { foreignKey: 'applicationStateId' });
applications_1.Application.belongsTo(applicationStates_1.ApplicationStates);
//# sourceMappingURL=associations.js.map