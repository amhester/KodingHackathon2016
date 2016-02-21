"use strict";

var appConfig = require('./../../app.config.json').NotificationService;
var request = require('request');

module.exports.register = function( server ) {

    server.post('/notification', function (req, res, next) {
        console.log('body', req.body);
        let notification = {
            id: req.body.id,
            accountId: req.body.accountId,
            seen: req.body.seen,
            message: req.body.message,
            link: req.body.link,
            email: req.body.email
        };

        request({
            method: 'POST',
            uri: appConfig.endpoints.notification,
            json: notification
        }
        , function (error, response, body) {
            if (error) {
                console.log("Error: " + error);
            } else {
                console.log("this is the response.request.body", response.request.body);
            }
        });
        res.send(notification);
        next();
    });
};
