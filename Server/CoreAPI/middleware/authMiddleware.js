"use strict";

const jwt = require('jsonwebtoken');
const config = require('./../../app.config.json').CoreAPI;

module.exports.authWall = function (req, res, next) {
    let authHeaderToken = req.header('x-winwin-token');
    //var authHeaderToken = authHeader && authHeader.split(' ').length > 1 ? authHeader.split(' ')[1] : '';
    if (req.url == '/token') {
        console.log('authwall /token');
        next();
    } else if (req.method == 'POST' && req.url == '/account') {
        console.log('authwall /account');
        next();
    } else if (authHeaderToken) {
        console.log('authwall authHeaderToken', authHeaderToken);

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