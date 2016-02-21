"use strict";

const config = require('./../app.config.json').mongo;
const mongo = require('mongodb').MongoClient;
const url = config.url
                    .replace(/<username>/, config.credentials.username)
                    .replace(/<password>/, config.credentials.password)
                    .replace(/<host>/, config.host)
                    .replace(/<port>/, config.port)
                    .replace(/<store>/, config.store);
var _db = {};

/* Services */
const Accounts = require('./services/Accounts');
const Charities = require('./services/Charities');
const Goals = require('./services/Goals');
const Notifications = require('./services/Notifications');
const Transactions = require('./services/Transactions');

/* Service Instances */
var _accounts = null;
var _charities = null;
var _goals = null;
var _notifications = null;
var _transactions = null;

mongo.connect(url, function (err, db) {
    if(err) {
        throw err;
    }

    _db = db;
    _accounts = new Accounts({db:_db});
    _charities = new Charities({db:_db});
    _goals = new Goals({db:_db});
    _notifications = new Notifications({db:_db});
    _transactions = new Transactions({db:_db});
});

class DataRepository {
    constructor () {}

    static get Accounts () { return _accounts; }
    static get Charities () { return _charities; }
    static get Goals () { return _goals; }
    static get Notifications () { return _notifications; }
    static get Transactions () { return _transactions; }
}

module.exports = DataRepository;