"use strict";

const config = require('./Server/app.config.json');
const Account = require('./Server/DataLayer/models/Account');
const _goals = new Goals(config.mongo);
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

    setTimeout(function () {
        auth.register(model, function (err, result) {
            if(err) {
                console.log(err.message);
            } else {
                console.log(result);
            }
            process.exit(1);
        });

        _goals.save(goalModel, function (err, result) {
            if (err) {
                console.log(err.message);
            } else {
                console.log(result);
            }
            process.exit(1);
        });
    }, 3000);
}
