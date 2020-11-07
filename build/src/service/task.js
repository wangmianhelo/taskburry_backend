"use strict";
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
exports.serachAddressService = exports.getAssigned = exports.assignTask = exports.makeOffer = exports.addQuestions = exports.showTasks = exports.getAlltasks = exports.deleteTask = exports.completeTask = exports.postTask = void 0;
var task_1 = require("../models/task");
var user_1 = require("../models/user");
var subData = require('./melb.json');
var fs = require('fs');
function postTask(_email, _title, _budget, _location, _date, _details) {
    return __awaiter(this, void 0, void 0, function () {
        var user, avatar, name, task, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, user_1.User.findOne({ email: _email })];
                case 1:
                    user = _a.sent();
                    avatar = user === null || user === void 0 ? void 0 : user.avatar;
                    name = user === null || user === void 0 ? void 0 : user.lastName;
                    console.log(avatar);
                    task = new task_1.Task({
                        email: _email,
                        title: _title,
                        budget: _budget,
                        name: name,
                        avatar: avatar,
                        location: _location,
                        date: _date,
                        status: 1,
                        details: _details,
                        assignedTo: ''
                    });
                    return [4 /*yield*/, task.save()];
                case 2:
                    result = _a.sent();
                    return [2 /*return*/, result];
            }
        });
    });
}
exports.postTask = postTask;
function changeTaskStatus(_id, _status) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, task_1.Task.findByIdAndUpdate(_id, { status: _status })];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
            }
        });
    });
}
function completeTask(_id) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, changeTaskStatus(_id, 3)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result === null || result === void 0 ? void 0 : result.status];
            }
        });
    });
}
exports.completeTask = completeTask;
function deleteTask(_id) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, task_1.Task.findByIdAndDelete(_id)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.deleteTask = deleteTask;
function getAlltasks() {
    return __awaiter(this, void 0, void 0, function () {
        var tasks;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, task_1.Task.find({ status: 1, }).sort({ date: 'desc' }).populate('user', 'avatar lastName').exec()];
                case 1:
                    tasks = _a.sent();
                    return [2 /*return*/, tasks];
            }
        });
    });
}
exports.getAlltasks = getAlltasks;
function showTasks(_id) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, task_1.Task.find({ email: _id }).populate('user', 'avatar lastName').exec()];
                case 1:
                    result = _a.sent();
                    console.log(result);
                    return [2 /*return*/, result];
            }
        });
    });
}
exports.showTasks = showTasks;
function addQuestions(_taskId, _email, _content) {
    return __awaiter(this, void 0, void 0, function () {
        var user, user_avatar, user_lastName, task, question, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, user_1.User.findOne({ email: _email })];
                case 1:
                    user = _a.sent();
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 6, , 7]);
                    user_avatar = user === null || user === void 0 ? void 0 : user.avatar;
                    user_lastName = user === null || user === void 0 ? void 0 : user.lastName;
                    return [4 /*yield*/, task_1.Task.findById(_taskId)];
                case 3:
                    task = _a.sent();
                    question = { name: user_lastName, avatar: user_avatar, content: _content };
                    //console.log(task?.questions)
                    return [4 /*yield*/, (task === null || task === void 0 ? void 0 : task.questions.push(question))];
                case 4:
                    //console.log(task?.questions)
                    _a.sent();
                    return [4 /*yield*/, (task === null || task === void 0 ? void 0 : task.save())];
                case 5:
                    _a.sent();
                    return [2 /*return*/, task === null || task === void 0 ? void 0 : task.questions];
                case 6:
                    e_1 = _a.sent();
                    console.log(e_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
exports.addQuestions = addQuestions;
function makeOffer(_taskId, _email, _budget) {
    return __awaiter(this, void 0, void 0, function () {
        var user, user_avatar, user_lastName, task, offer, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, user_1.User.findOne({ email: _email })];
                case 1:
                    user = _a.sent();
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 6, , 7]);
                    user_avatar = user === null || user === void 0 ? void 0 : user.avatar;
                    user_lastName = user === null || user === void 0 ? void 0 : user.lastName;
                    return [4 /*yield*/, task_1.Task.findById(_taskId)];
                case 3:
                    task = _a.sent();
                    offer = { name: user_lastName, avatar: user_avatar, budget: _budget };
                    //console.log(task?.questions)
                    return [4 /*yield*/, (task === null || task === void 0 ? void 0 : task.offers.push(offer))];
                case 4:
                    //console.log(task?.questions)
                    _a.sent();
                    return [4 /*yield*/, (task === null || task === void 0 ? void 0 : task.save())];
                case 5:
                    _a.sent();
                    return [2 /*return*/, task === null || task === void 0 ? void 0 : task.offers];
                case 6:
                    e_2 = _a.sent();
                    console.log(e_2);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
exports.makeOffer = makeOffer;
function assignTask(_taskId, _email) {
    return __awaiter(this, void 0, void 0, function () {
        var task, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, task_1.Task.findOne({ _id: _taskId })];
                case 1:
                    task = _a.sent();
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 6, , 7]);
                    return [4 /*yield*/, (task === null || task === void 0 ? void 0 : task.update({ assignedTo: _email }))];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, changeTaskStatus(_taskId, 2)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, (task === null || task === void 0 ? void 0 : task.save())];
                case 5:
                    _a.sent();
                    return [2 /*return*/, task === null || task === void 0 ? void 0 : task.status];
                case 6:
                    e_3 = _a.sent();
                    console.log(e_3);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
exports.assignTask = assignTask;
function getAssigned(_email) {
    return __awaiter(this, void 0, void 0, function () {
        var tasks;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, task_1.Task.find({ assignedTo: _email })];
                case 1:
                    tasks = _a.sent();
                    return [2 /*return*/, tasks];
            }
        });
    });
}
exports.getAssigned = getAssigned;
function serachAddressService(_address) {
    return __awaiter(this, void 0, void 0, function () {
        var addressChars, suburbs, resultList;
        return __generator(this, function (_a) {
            addressChars = _address.split('');
            suburbs = subData.name;
            resultList = [];
            suburbs.map(function (item) {
                var itemChars = item.name.split('');
                if (addressChars[0] === itemChars[0]) {
                    resultList.push(item.name);
                }
            });
            return [2 /*return*/, resultList];
        });
    });
}
exports.serachAddressService = serachAddressService;
