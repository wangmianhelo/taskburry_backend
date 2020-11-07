"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var task_status;
(function (task_status) {
    task_status[task_status["open"] = 0] = "open";
    task_status[task_status["assigned"] = 1] = "assigned";
    task_status[task_status["completed"] = 2] = "completed";
})(task_status || (task_status = {}));
var taskSchema = new mongoose_1.default.Schema({
    email: { type: String, ref: 'User' },
    name: String,
    budget: Number,
    avatar: String,
    title: String,
    location: String,
    date: Date,
    status: Number,
    details: String,
    questions: Array,
    offers: Array,
    assignedTo: { type: String, ref: 'User' }
}, { timestamps: true });
exports.Task = mongoose_1.default.model("Task", taskSchema);
