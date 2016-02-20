"use strict";

const config = require('./Server/CoreAPI/app.config.json');
const Account = require('./Server/DataLayer/models/Account');
const Accounts = require('./Server/DataLayer/services/Accounts');
const _accounts = new Accounts(config.mongo);
const argv = require('yargs').argv;

if(argv.createDemoAccount) {
    let model = new Account({
        id: 0,
        email: 'amhester+kh2016-demo@anderson.edu',
        passwordHash: 'demo',
        displayName: 'Demo Account',
        defaultCharity: 1
    });

    _accounts.save(model, function (err, result) {
        if(err) {
            console.log(err.message);
        } else {
            console.log(result);
        }
        process.exit(1);
    });
}