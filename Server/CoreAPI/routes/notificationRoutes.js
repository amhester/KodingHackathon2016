"use strict";

var appConfig = require('./../app.config.json');
var request = require('request');

module.exports.register = function( server ) {

    server.post('/notification', function (req, res, next) {
        console.log(req.body);
        let notification = {
            id: req.body.id,
            accountId: req.body.accountId,
            seen: req.body.seen,
            message: req.body.message,
            link: req.body.link,
            email: req.body.email
        };

        //request('http://www.google.com', function (error, response, body) {
        //    if (!error && response.statusCode == 200) {
        //        console.log(body) // Show the HTML for the Google homepage.
        //    }
        //})

        res.send(notification);
        next();
    });
};
