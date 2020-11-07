"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var decorator_1 = require("../decorator");
var user_1 = require("../service/user");
var jwt_1 = require("../utils/jwt");
var auth_1 = require("../service/auth");
var express_validator_1 = require("express-validator");
var auth_2 = require("../middleware/auth");
var logger_1 = require("../middleware/logger");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.auth = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var token, decodedToken, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        token = req.body.token;
                        decodedToken = jwt_1.validateToken(token);
                        return [4 /*yield*/, auth_1.authSerivce(decodedToken.id)];
                    case 1:
                        result = _a.sent();
                        if (typeof result === 'object') {
                            return [2 /*return*/, res.json({
                                    email: result.email,
                                    avatar: result.avatar
                                })];
                        }
                        else {
                            return [2 /*return*/, res.status(400).json({
                                    error: "invalid token"
                                })];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.editProfile = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var errors, _a, email, firstName, lastName, location, phoneNumber, user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, express_validator_1.check("email", "Email is not valid").isEmail().run(req)];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, express_validator_1.body("email").normalizeEmail({ gmail_remove_dots: false }).run(req)];
                    case 2:
                        _b.sent();
                        errors = express_validator_1.validationResult(req);
                        if (!errors.isEmpty()) {
                            return [2 /*return*/, res.json({
                                    e: errors
                                })];
                        }
                        _a = req.body, email = _a.email, firstName = _a.firstName, lastName = _a.lastName, location = _a.location, phoneNumber = _a.phoneNumber;
                        console.log(email);
                        return [4 /*yield*/, user_1.editUserInfo(email, firstName, lastName, location, phoneNumber)];
                    case 3:
                        user = _b.sent();
                        return [2 /*return*/, res.json({
                                user: user
                            })];
                }
            });
        });
    };
    UserController.prototype.showInfo = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var email, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(req);
                        email = req.params.email;
                        return [4 /*yield*/, user_1.showUserInfo(email)];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, res.json({
                                data: user
                            })];
                }
            });
        });
    };
    __decorate([
        decorator_1.Use(logger_1.Logger),
        decorator_1.PostMapping('/Auth'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], UserController.prototype, "auth", null);
    __decorate([
        decorator_1.Use(auth_2.Auth),
        decorator_1.Use(logger_1.Logger),
        decorator_1.PutMapping('/profile'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], UserController.prototype, "editProfile", null);
    __decorate([
        decorator_1.Use(auth_2.Auth),
        decorator_1.Use(logger_1.Logger),
        decorator_1.GetMapping('/info/:email'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], UserController.prototype, "showInfo", null);
    UserController = __decorate([
        decorator_1.Controller('/api/user')
    ], UserController);
    return UserController;
}());
