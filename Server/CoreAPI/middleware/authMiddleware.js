"use strict";

const jwt = require('jsonwebtoken');
const config = require('./../../app.config.json').CoreAPI;

module.exports.authWall = function (req, res, next) {
    let authHeaderToken = req.header('x-winwin-token');
    //var authHeaderToken = authHeader && authHeader.split(' ').length > 1 ? authHeader.split(' ')[1] : '';
    if (req.url == '/token') {
        next();
    } else if (req.method == 'POST' && req.url == '/account') {
        next();
    } else if (authHeaderToken) {
        jwt.verify(authHeaderToken, config.appSecret, function (err, payload) {
            if(err) {
                console.log('authwall err');
                res.send(403, "Unauthorized Access.");
            } else {
                console.log('authwall cool');
                req.authContext = payload;
                next();
            }
        });
    } else {
        console.log('authwall no token');
        res.send(403, "Unauthorized Access.");
    }
};