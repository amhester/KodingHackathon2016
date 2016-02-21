"use strict";

var appConfig = require('./../../app.config.json').NotificationService;
var request = require('request');
var Repository = require('./../../DataLayer/DataRepository.js');

module.exports.register = function( server ) {

    // Mark notification as seen

    // Get notifications on account
    server.get('/notifications/:accountId', function (req, res, next) {
        console.log("Requesting notifications on account.");
        // Grab for account req.params.accountId
        let notifications = Repository.Notifications;
        //let accountNotifications = notifications.query().find({ accountId:req.params.accountId }).toArray();
        let accountNotifications = notifications.query().find().toArray( function(err, docs) {
            if (err) {
                console.log(err.message);
            } else {
                console.log(docs);
                res.send(docs);
            }
        });
        //console.log(accountNotifications);
        //res.send(accountNotifications);
    });

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
