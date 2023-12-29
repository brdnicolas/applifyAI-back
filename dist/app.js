"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const process = __importStar(require("process"));
const auth_routes_1 = require("@/routes/auth.routes");
const applications_routes_1 = require("@/routes/applications.routes");
require("@/models/associations");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerConfig_json_1 = __importDefault(require("@/config/swaggerConfig.json"));
const createApp = () => {
    const app = (0, express_1.default)();
    app.use('/doc', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerConfig_json_1.default));
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({
        extended: true
    }));
    if (process.env.NODE_ENV === 'development') {
        app.use((0, morgan_1.default)('dev'));
    }
    app.use('/api', auth_routes_1.authRoutes);
    app.use('/api/applications', applications_routes_1.applicationsRoutes);
    app.use('/health', (_, res) => {
        res.send('OK');
    });
    return app;
};
exports.createApp = createApp;
//# sourceMappingURL=app.js.map