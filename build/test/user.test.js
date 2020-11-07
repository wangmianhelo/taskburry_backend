"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var index_1 = __importDefault(require("../src/index"));
describe("GET /task/tasks", function () {
    it("should return 200 OK", function () {
        return supertest_1.default(index_1.default).get("/user/info/wm194@qq.com")
            .expect(200);
    });
});
