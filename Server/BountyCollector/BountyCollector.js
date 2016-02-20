
"use strict";
var appConfig = require('./app.config.json');
var schedule = require('node-schedule');

(function () {

    var scheduledJob = schedule.scheduleJob(appConfig.cronTest, function() {

        console.log('recurrence rule has been met... ');
    });

    // select from goals table
        // if expiration date < new Date().now().getTime();


    // create notification

    // call notification service to send notification out via email


})();