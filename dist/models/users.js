"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSync = exports.User = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("@/config/db");
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.User = db_1.sequelize.define('user', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    firstName: {
        type: sequelize_1.DataTypes.STRING,
        field: 'first_name',
        allowNull: false
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING,
        field: 'last_name',
        allowNull: false
    }
}, {
    hooks: {
        beforeCreate: async (user) => {
            user.password = await bcrypt_1.default.hash(user.password, 10);
        }
    }
});
exports.UserSync = exports.User.sync({ alter: true }).then(() => {
    console.log('User Model synced');
});
//# sourceMappingURL=users.js.map