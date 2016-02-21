"use strict";

const config = require('./../app.config.json').mongo;

/* Models */
const Account = require('./models/Account');
const Charity = require('./models/Charity');
const Goal = require('./models/Goal');
const Notification = require('./models/Notification');
const Transaction = require('./models/Transaction');

/* Services */
const Accounts = require('./services/Accounts');
const Charities = require('./services/Charities');
const Goals = require('./services/Goals');
const Notifications = require('./services/Notifications');
const Transactions = require('./services/Transactions');

/* Service Instances */
const _accounts = new Accounts(config);
const _charities = new Charities(config);
const _goals = new Goals(config);
const _notifications = new Notifications(config);
const _transactions = new Transactions(config);

class DataRepository {
    constructor () {

    }

    static get Accounts () { return _accounts; }
    static get Charities () { return _charities; }
    static get Goals () { return _goals; }
    static get Notifications () { return _notifications; }
    static get Transactions () { return _transactions; }
}

module.exports = DataRepository;