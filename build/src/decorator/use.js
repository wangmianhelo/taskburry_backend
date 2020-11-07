"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Use = void 0;
function Use(middleware) {
    return function (target, key) {
        var orginMiddlewares = Reflect.getMetadata('middlewares', target, key) || [];
        orginMiddlewares.push(middleware);
        Reflect.defineMetadata('middlewares', orginMiddlewares, target, key);
    };
}
exports.Use = Use;
