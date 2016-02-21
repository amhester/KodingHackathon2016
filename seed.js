"use strict";

const config = require('./Server/app.config.json');
const Account = require('./Server/DataLayer/models/Account');
const Goal = require('./Server/DataLayer/models/Goal');
const Notification = require('./Server/DataLayer/models/Notification');
const db = require('./Server/DataLayer/DataRepository');
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

    let goal = new Goal({
        accountId: "0e7a3313-7951-434d-8baf-a369785d8d67",
        name: "HHHHEEEEEYYYY",
        description: "So 2009...",
        bounty: "7",
        charityId: 0,
        expiration: Date.now()
    });

    let notification = new Notification({
        accountId: "0e7a3313-7951-434d-8baf-a369785d8d67",
        message: "Hello! Win/Win!",
        link: "mylink.winwinapp.com",
        email: "djragsdale@anderson.edu"
    });

    setTimeout(function () {
        //auth.register(model, function (err, result) {
        //    if(err) {
        //        console.log(err.message);
        //    } else {
        //        console.log(result);
        //    }
        //    process.exit(1);
        //});

        //db.Goals.save(goal, function(err) {
        //    if (err) {
        //        console.log(err.message);
        //    } else {
        //        console.log(goal);
        //    }
        //});

        //db.Notifications.save(notification, function(err) {
        //    if (err) {
        //        console.log(err.message);
        //    } else {
        //        console.log(notification);
        //    }
        //});

    }, 3000);
}
