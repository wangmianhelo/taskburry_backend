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
var decorator_1 = require("../decorator");
require("reflect-metadata");
var task_1 = require("../service/task");
var auth_1 = require("../middleware/auth");
var logger_1 = require("../middleware/logger");
var TaskController = /** @class */ (function () {
    function TaskController() {
    }
    TaskController.prototype.getTasks = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, task_1.getAlltasks()];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            res.json({
                                desc: 'succ',
                                data: result
                            });
                        }
                        else {
                            res.status(400).json({
                                desc: 'Invaild',
                                data: []
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskController.prototype.postTask = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, email, title, budget, location, date, details, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, email = _a.email, title = _a.title, budget = _a.budget, location = _a.location, date = _a.date, details = _a.details;
                        return [4 /*yield*/, task_1.postTask(email, title, budget, location, date, details)];
                    case 1:
                        result = _b.sent();
                        return [2 /*return*/, res.json({
                                desc: "ok",
                                data: result
                            })];
                }
            });
        });
    };
    TaskController.prototype.completeTask = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, task_1.completeTask(id)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            return [2 /*return*/, res.status(200).json({
                                    desc: "ok",
                                    data: result
                                })];
                        }
                        else {
                            return [2 /*return*/, res.json({
                                    status: 400,
                                    desc: "failed",
                                })];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskController.prototype.deleteTask = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, task_1.deleteTask(id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.json({
                                status: 200,
                                desc: "ok"
                            })];
                }
            });
        });
    };
    TaskController.prototype.showMytasks = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var userid, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userid = req.params.userid;
                        return [4 /*yield*/, task_1.showTasks(userid)];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, res.json({
                                data: user
                            })];
                }
            });
        });
    };
    TaskController.prototype.addQuestions = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var taskid, _a, email, content, questions;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        taskid = req.params.taskid;
                        _a = req.body, email = _a.email, content = _a.content;
                        return [4 /*yield*/, task_1.addQuestions(taskid, email, content)];
                    case 1:
                        questions = _b.sent();
                        return [2 /*return*/, res.json({
                                status: 200,
                                desc: "succ",
                                data: questions
                            })];
                }
            });
        });
    };
    TaskController.prototype.makeoffer = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var taskid, _a, email, budget, offers;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        taskid = req.params.taskid;
                        _a = req.body, email = _a.email, budget = _a.budget;
                        return [4 /*yield*/, task_1.makeOffer(taskid, email, budget)];
                    case 1:
                        offers = _b.sent();
                        return [2 /*return*/, res.json({
                                desc: "succ",
                                data: offers
                            })];
                }
            });
        });
    };
    TaskController.prototype.assignTask = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var taskid, email, status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        taskid = req.params.taskid;
                        email = req.body.email;
                        return [4 /*yield*/, task_1.assignTask(taskid, email)];
                    case 1:
                        status = _a.sent();
                        return [2 /*return*/, res.json({
                                desc: "succ",
                                data: status
                            })];
                }
            });
        });
    };
    TaskController.prototype.getAssigned = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var email, assignedTasks;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        email = req.params.email;
                        return [4 /*yield*/, task_1.getAssigned(email)];
                    case 1:
                        assignedTasks = _a.sent();
                        return [2 /*return*/, res.json({
                                desc: "succ",
                                data: assignedTasks
                            })];
                }
            });
        });
    };
    TaskController.prototype.getAvailableAddress = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var address, resultList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        address = req.params.address;
                        return [4 /*yield*/, task_1.serachAddressService(address)];
                    case 1:
                        resultList = _a.sent();
                        return [2 /*return*/, res.json({
                                result: resultList
                            })];
                }
            });
        });
    };
    __decorate([
        decorator_1.Use(logger_1.Logger),
        decorator_1.GetMapping('/tasks'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], TaskController.prototype, "getTasks", null);
    __decorate([
        decorator_1.Use(auth_1.Auth),
        decorator_1.Use(logger_1.Logger),
        decorator_1.PostMapping('/task'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], TaskController.prototype, "postTask", null);
    __decorate([
        decorator_1.Use(logger_1.Logger),
        decorator_1.PutMapping('/status/:id'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], TaskController.prototype, "completeTask", null);
    __decorate([
        decorator_1.Use(logger_1.Logger),
        decorator_1.DeleteMapping('/task/:id'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], TaskController.prototype, "deleteTask", null);
    __decorate([
        decorator_1.Use(auth_1.Auth),
        decorator_1.Use(logger_1.Logger),
        decorator_1.GetMapping('/mytasks/:userid'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], TaskController.prototype, "showMytasks", null);
    __decorate([
        decorator_1.Use(logger_1.Logger),
        decorator_1.PostMapping('/questions/:taskid'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], TaskController.prototype, "addQuestions", null);
    __decorate([
        decorator_1.Use(logger_1.Logger),
        decorator_1.PostMapping('/offers/:taskid'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], TaskController.prototype, "makeoffer", null);
    __decorate([
        decorator_1.Use(logger_1.Logger),
        decorator_1.PostMapping('/assign/:taskid'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], TaskController.prototype, "assignTask", null);
    __decorate([
        decorator_1.Use(logger_1.Logger),
        decorator_1.GetMapping('/assign/tasks/:email'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], TaskController.prototype, "getAssigned", null);
    __decorate([
        decorator_1.GetMapping('/address/:address'),
        decorator_1.Use(auth_1.Auth),
        decorator_1.Use(logger_1.Logger),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], TaskController.prototype, "getAvailableAddress", null);
    TaskController = __decorate([
        decorator_1.Controller('/api/task')
    ], TaskController);
    return TaskController;
}());
