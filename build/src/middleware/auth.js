"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
var validateToken = require('../utils/jwt').validateToken;
function Auth(req, res, next) {
    var authHeader = req.header("Authorization");
    if (!authHeader)
        return res.json("Access denied");
    var contentArr = authHeader.split(' ');
    if (contentArr.length !== 2 || contentArr[0] !== 'Bearer') {
        return res.json("Access denied");
    }
    var decoded = validateToken(contentArr[1]);
    if (decoded) {
        req.user = decoded;
        return next();
    }
    return res.status(401).json('Access Denied');
}
exports.Auth = Auth;
