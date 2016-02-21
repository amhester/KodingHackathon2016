"use strict";

const jwt = require('jsonwebtoken');
const config = require('./../../app.config.json').CoreAPI;

module.exports.authWall = function (req, res, next) {
    let authHeader = req.header('Authorization');
    var authHeaderToken = authHeader && authHeader.split(' ').length > 1 ? authHeader.split(' ')[1] : '';
    if (req.url == '/token') {
        next();
    } else if (req.method == 'POST' && req.url == '/account') {
        next();
    } else if (authHeader) {
        jwt.verify(authHeaderToken, config.appSecret, function (err, payload) {
            if(err) {
                res.send(403, "Unauthorized Access.");
            } else {
                req.authContext = payload;
                next();
            }
        });
    } else {
        res.send(403, "Unauthorized Access.");
    }
};