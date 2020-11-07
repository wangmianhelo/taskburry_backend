"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var winston_1 = __importDefault(require("winston"));
var _a = require('winston'), createLogger = _a.createLogger, format = _a.format, transports = _a.transports;
var combine = format.combine, timestamp = format.timestamp, printf = format.printf;
var customFormat = printf(function (info) {
    var message = info.message;
    if (typeof message === 'object') {
        var cache_1 = [];
        message = JSON.stringify(message, function (key, value) {
            if (typeof value === 'object' && value !== null) {
                if (cache_1.indexOf(value) !== -1) {
                    // Duplicate reference found
                    try {
                        // If this value does not reference a parent it can be deduped
                        return JSON.parse(JSON.stringify(value));
                    }
                    catch (error) {
                        // discard key if value cannot be deduped
                        return undefined;
                    }
                }
                // Store value in our collection
                cache_1.push(value);
            }
            return value;
        });
        cache_1 = [];
    }
    return "> " + info.timestamp + " " + info.level + ": " + message;
});
var logger = createLogger({
    format: combine(format.colorize(), timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
    }), customFormat),
    transports: [
        new winston_1.default.transports.Console({
            level: process.env.NODE_ENV === "production" ? "error" : "debug"
        }),
        new winston_1.default.transports.File({ filename: "debug.log", level: "debug" })
    ],
});
if (process.env.NODE_ENV !== "production") {
    logger.debug("Logging initialized at debug level");
}
exports.Logger = function (req, res, next) {
    logger.info("handle request url " + req.url);
    next();
};
