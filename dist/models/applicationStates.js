"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationStatesSync = exports.ApplicationStates = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("@/config/db");
const types_1 = require("@/shared/types");
exports.ApplicationStates = db_1.sequelize.define('applicationStates', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isIn: [Object.keys(types_1.EApplicationState)]
        }
    }
});
exports.ApplicationStatesSync = exports.ApplicationStates.sync({ force: true }).then(async () => {
    console.log('ApplicationStates Model synced');
    try {
        await exports.ApplicationStates.bulkCreate([
            { name: 'applied' },
            { name: 'relaunched' },
            { name: 'interviewObtained' },
            { name: 'archived' }
        ]);
        console.log('Default application states added');
    }
    catch (error) {
        console.error('[ERROR] - Adding default application states :', error);
    }
});
//# sourceMappingURL=applicationStates.js.map