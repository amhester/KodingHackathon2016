"use strict";

var appConfig = require('./../app.config.json');
var schedule = require('node-schedule');
//var Goals = require('./../DataLayer/services/Goals');
var Goal = require('./../DataLayer/models/Goal');
//var Notifications = require('./../DataLayer/services/Notifications');
var Notification = require('./../DataLayer/models/Notification.js');
var db = require('./../DataLayer/DataRepository');
var request = require('request');
var NotificationService = require('./../NotificationService/routes/notificationRoutes');

// var notifications = new Notifications(appConfig.mongo);
//var goals = new Goals(appConfig.mongo);

var notification = null;
var g = db.Goals;
(function () {
    //console.log(`~~~~~~~~~~~~ \n\n DogTheBountyHunter starting hunting down expired notifications @${new Date()} \n\n cron schedule looks like: ${ appConfig.BountyCollector.cron } \n\n ~~~~~~~~~~~~`);
    var DogTheBountyHunter = schedule.scheduleJob(appConfig.BountyCollector.cron, function () {

        if ((g = db.Goals) != null) {
            g.query()
                .find().toArray(function (err, results) {
                if (err) {
                    console.log('1');
                    console.log(err.message);
                }
                var now = new Date().getTime();
                results.forEach(function (obj) {
                    if (obj.expiration < now) {
                        if (obj.status = Goal.GOAL_STATUSES.OPEN) {
                            obj.status = Goal.GOAL_STATUSES.EXPIRED;
                            db.Goals.save(new Goal(obj), function (err, goal) {
                                if (err) {
                                    console.log('2');
                                    console.log(err);
                                }
                            });

                            // TODO: generate actual link
                            let link = "https://169.44.62.169/goal/" + obj.id + "/expired";

                            notification = Notification.fromGoal(obj,
                                Notification.NOTIFICATION_TYPES.EXPIRED,
                                false,
                                'Hey...pay up. <a href="' + link + '">See goal</a>', link);

                            db.Notifications.save(notification, function (err, notif) {
                                if (err) {
                                    console.log('3');
                                    console.log(err.message);
                                }

                                let NotificationService = new NotificationService();
                                NotificationService.sendNotification(
                                    notification,
                                    function(err, res) {
                                        if (err) {
                                            console.log('4');
                                            console.log(err.message);
                                        }
                                        console.log(res);
                                    }
                                );

                                /*
                                request({
                                        method: 'POST',
                                        uri: appConfig.BountyCollector.notificationUrl,
                                        json: notif.toJson()
                                    },
                                    function (err, response, body) {
                                        if (err) {
                                            console.log('4');
                                            console.log(err.message);
                                        }
                                    });*/
                            });
                        }
                    }
                });
            });
        } // else db.Goals is null
    });
})();