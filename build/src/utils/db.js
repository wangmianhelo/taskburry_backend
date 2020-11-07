"use strict";
var mongoose = require('mongoose');
exports.connectToDB = function () {
    var _a = process.env, FULL_CONNECTION_STRING = _a.FULL_CONNECTION_STRING, DB_HOST = _a.DB_HOST, DB_PORT = _a.DB_PORT, DB_DATABASE = _a.DB_DATABASE;
    var connectString = FULL_CONNECTION_STRING || "mongodb://" + DB_HOST + ":" + DB_PORT + "/" + DB_DATABASE;
    console.log(connectString);
    var db = mongoose.connection;
    db.on('connected', function () {
        console.log('DB connected');
    });
    db.on('error', function (error) {
        console.log('failed');
        console.error(error.message);
        process.exit(1);
    });
    db.on('disconnected', function () {
        console.log('disconnected');
    });
    mongoose.connect(connectString, { useNewUrlParser: true }, { useUnifiedTopology: true });
};
