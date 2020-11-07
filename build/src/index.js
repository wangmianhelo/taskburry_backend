"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
try {
    require('dotenv').config();
}
catch (e) { }
var express_1 = __importDefault(require("express"));
var cors = require('cors');
var connectToDB = require('./utils/db').connectToDB;
var PORT = process.env.PORT;
require("./controller/account");
require("./controller/login");
require("./controller/task");
require("./controller/user");
require("./controller/upload");
require("./controller/map");
require("./controller/notification");
var errorhandler_1 = __importDefault(require("errorhandler"));
var body_parser_1 = __importDefault(require("body-parser"));
var router_1 = __importDefault(require("./router"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var swaggerDocument = __importStar(require("./swagger.json"));
var app = express_1.default();
app.set("port", PORT || '7001');
app.use(express_1.default.static('public'));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
connectToDB();
app.use(cors());
app.use(router_1.default);
app.use('/swagger', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
if (process.env.NODE_ENV === 'development') {
    app.use(errorhandler_1.default());
}
exports.default = app;
