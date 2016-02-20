"use strict";

var appConfig = require('./app.config.json');
var schedule = require('node-schedule');
var Goal = require('./../DataLayer/models/Goal');
var Goals = require('./../DataLayer/services/Goals');

(function () {

    var scheduledJob = schedule.scheduleJob(appConfig.cronTest, function() {
        console.log('recurrence rule has been met... ');

        var goalsList = new Goals({
            "host": appConfig.mongo.host,
            "port": appConfig.mongo.port,
            "store": appConfig.mongo.store,
            "maxRetries": appConfig.mongo.maxRetries
        });

        goalsList.onConnected = function() {
            console.log('on connect');
            goalsList.save(new Goal({}), function(err, res) {
                if (err) {
                    console.log(err.message);
                }
                console.log('saved...');
            });
        };
        console.log(goalsList);


    });

    // select from goals table
        // if expiration date < new Date().now().getTime();


    // create notification

    // call notification service to send notification out via email


})();