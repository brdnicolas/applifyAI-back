"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationSync = exports.Application = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("@/config/db");
exports.Application = db_1.sequelize.define('application', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    job: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    company: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    jobOfferUrl: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    applicationDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    },
    cv: {
        type: sequelize_1.DataTypes.BLOB('long'),
        allowNull: true
    },
    coverLetter: {
        type: sequelize_1.DataTypes.BLOB('long'),
        allowNull: true
    },
    companyImageUrl: {
        type: sequelize_1.DataTypes.BLOB('long')
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER
    },
    applicationStateId: {
        type: sequelize_1.DataTypes.INTEGER
    }
});
exports.ApplicationSync = exports.Application.sync({ alter: true }).then(() => {
    console.log('Application Model synced');
});
//# sourceMappingURL=applications.js.map