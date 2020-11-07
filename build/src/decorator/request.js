"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMapping = exports.PutMapping = exports.PostMapping = exports.GetMapping = void 0;
var Method;
(function (Method) {
    Method["get"] = "get";
    Method["post"] = "post";
    Method["put"] = "put";
    Method["delete"] = "delete";
})(Method || (Method = {}));
function GetMapping(path) {
    return function (target, key) {
        Reflect.defineMetadata('path', path, target, key);
        Reflect.defineMetadata('method', 'get', target, key);
    };
}
exports.GetMapping = GetMapping;
function PostMapping(path) {
    return function (target, key) {
        Reflect.defineMetadata('path', path, target, key);
        Reflect.defineMetadata('method', 'post', target, key);
    };
}
exports.PostMapping = PostMapping;
function PutMapping(path) {
    return function (target, key) {
        Reflect.defineMetadata('path', path, target, key);
        Reflect.defineMetadata('method', 'put', target, key);
    };
}
exports.PutMapping = PutMapping;
function DeleteMapping(path) {
    return function (target, key) {
        Reflect.defineMetadata('path', path, target, key);
        Reflect.defineMetadata('method', 'delete', target, key);
    };
}
exports.DeleteMapping = DeleteMapping;
