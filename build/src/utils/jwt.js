"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = exports.generateToken = void 0;
var jwt = require('jsonwebtoken');
var JWT_KEY = process.env.JWT_KEY;
function generateToken(id) {
    var token = jwt.sign({ id: id }, JWT_KEY, { expiresIn: '24h' });
    return token;
}
exports.generateToken = generateToken;
function validateToken(token) {
    var decoded;
    try {
        decoded = jwt.verify(token, JWT_KEY);
    }
    catch (e) {
        return null;
    }
    return decoded;
}
exports.validateToken = validateToken;
