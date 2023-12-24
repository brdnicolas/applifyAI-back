"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testDbConnection = exports.sequelize = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize(process.env.POSTGRES_URL + '?sslmode=require', {
    logging: false
});
const testDbConnection = async () => {
    try {
        await exports.sequelize.authenticate();
        console.log('Connection has been established successfully.');
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
exports.testDbConnection = testDbConnection;
//# sourceMappingURL=db.js.map