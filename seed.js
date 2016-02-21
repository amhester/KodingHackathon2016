"use strict";

const config = require('./Server/CoreAPI/app.config.json');
const Account = require('./Server/DataLayer/models/Account');
const Accounts = require('./Server/DataLayer/services/Accounts');
const _accounts = new Accounts(config.mongo);
const _goals = new Goals(config.mongo);
const argv = require('yargs').argv;

if(argv.createDemoAccount) {
    let model = new Account({
        id: 0,
        email: 'amhester+kh2016-demo@anderson.edu',
        passwordHash: 'demo',
        displayName: 'Demo Account',
        defaultCharity: 1
    });

    let goalModel = new Goal({
        id: 0,
        accountId: 1,
        name: "HHHHEEEEEYYYY",
        description: "This isn't cool.",
        bounty: "7",
        charityId: 0,
        expiration: new Date(Date.now()).setYear(2015),
        status: "B",
        createdOn: new Date(Date.now()),
        updatedOn: new Date(Date.now())
    });

    _accounts.onConnected = function () {
        _accounts.save(model, function (err, result) {
            if(err) {
                console.log(err.message);
            } else {
                console.log(result);
            }
            process.exit(1);
        });
    };

    _goals.onConnected = function () {
        _goals.save(goalModel, function (err, result) {
            if (err) {
                console.log(err.message);
            } else {
                console.log(result);
            }
            process.exit(1);
        });
    };
}