"use strict";

const config = require('./Server/app.config.json');
const Account = require('./Server/DataLayer/models/Account');
const Goal = require('./Server/DataLayer/models/Goal');
const Notification = require('./Server/DataLayer/models/Notification');
const Repository = require('./Server/DataLayer/DataRepository');
const AuthService = require('./Server/DataLayer/services/AuthService');
const auth = new AuthService(config);
const argv = require('yargs').argv;

if(argv.createDemoAccount) {
    let model = new Account({
        id: 0,
        email: 'amhester+kh2016-demo@anderson.edu',
        passwordHash: 'demo',
        displayName: 'Demo Account',
        defaultCharity: 1
    });

    let Goals = Repository.Goals;

    let goal = new Goal({
        accountId: 0,
        name: "HHHHEEEEEYYYY",
        description: "This isn't cool.",
        bounty: "7",
        charityId: 0
    });


    let Notifications = Repository.Notifications;

    let notification = new Notification({
        message: "Hello! Win/Win!",
        link: "mylink.winwinapp.com",
        email: "djragsdale@anderson.edu"
    });

    setTimeout(function () {
        auth.register(model, function (err, result) {
            if(err) {
                console.log(err.message);
            } else {
                console.log(result);
            }
            process.exit(1);
        });

        Goals.save(goal, function(err) {
            if (err) {
                console.log(err.message);
            }
        });

        Notifications.save(notification, function(err) {
            if (err) {
                console.log(err.message);
            } else {

            }
        });

    }, 8000);
}
