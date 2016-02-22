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

                console.log('number of results in bounty collector:', results.length);
                results.forEach(function (obj) {
                    if (obj.expiration < now) {
                        console.log('expiration is less than now...', obj.status);
                        if (obj.status == Goal.GOAL_STATUSES.OPEN) {
                            db.Goals.save(new Goal({
                                    id: obj.id,
                                    accountId: obj.accountId,
                                    name: obj.name,
                                    description: obj.description,
                                    bounty: obj.bounty,
                                    charityId: obj.charityId,
                                    expiration: obj.expiration,
                                    status: Goal.GOAL_STATUSES.EXPIRED,
                                    createdOn: obj.createdOn,
                                    updatedOn: new Date()
                            }), function (err, goal) {
                                if (err) {
                                    console.log('2');
                                    console.log(err);
                                }


                                // TODO: generate actual link
                                let link = "https://169.44.62.169/goal/" + goal.id + "/expired";

                                notification = Notification.fromGoal(goal,
                                    Notification.NOTIFICATION_TYPES.EXPIRED,
                                    false,
                                    'Hey...pay up. <a href="' + link + '">See goal</a>', link);

                                db.Notifications.save(notification, function (err, notif) {
                                    if (err) {
                                        console.log('3');
                                        console.log(err.message);
                                    } else {
                                        /*let notificationService = new NotificationService();
                                         notificationService.sendNotification(
                                         notif,
                                         function(err, res) {
                                         if (err) {
                                         console.log('4');
                                         console.log(err.message);
                                         }
                                         console.log('notification sent');
                                         }
                                         );*/
                                        console.log(notif);
                                        console.log('faux notification sent...');
                                    }
                                });
                            });

                        }
                    }
                });
            });
        } // else db.Goals is null
    });
})();