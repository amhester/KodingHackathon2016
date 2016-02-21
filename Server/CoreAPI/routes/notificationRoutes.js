"use strict";

var appConfig = require('./../../app.config.json').NotificationService;
var request = require('request');
var db = require('./../../DataLayer/DataRepository.js');

module.exports.register = function( server ) {

    // Mark notification as seen
    server.put('/seen/:id', function (req, res, next) {
        console.log("Marking notification as seen for id " + req.params.id + ".");
        db.Notifications.query().findOneAndUpdate({ id:req.params.id }
        , {$set: { seen : true }}
        , function(err, doc) {
            if (err) {
                console.log(err.message);
            } else {
                console.log(doc);
                res.send(doc);
                next();
            }
        });
    });

    // Get notifications on account
    server.get('/notifications/:accountId', function (req, res, next) {
        console.log("Requesting notifications on account " + req.params.accountId + ".");
        db.Notifications.query().find({ accountId:req.params.accountId }).toArray( function(err, docs) {
            if (err) {
                console.log(err.message);
            } else {
                //console.log(docs);
                res.send(docs);
                next();
            }
        });
    });

    //server.post('/notification', function (req, res, next) {
    //    console.log('body', req.body);
    //    let notification = {
    //        id: req.body.id,
    //        accountId: req.body.accountId,
    //        seen: req.body.seen,
    //        message: req.body.message,
    //        link: req.body.link,
    //        email: req.body.email
    //    };
    //
    //    request({
    //        method: 'POST',
    //        uri: appConfig.endpoints.notification,
    //        json: notification
    //    }
    //    , function (error, response, body) {
    //        if (error) {
    //            console.log("Error: " + error);
    //        } else {
    //            console.log("this is the response.request.body", response.request.body);
    //            res.send(response.request.body);
    //            next();
    //        }
    //    });
    //});
};
