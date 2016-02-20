"use strict";

const mongo = require('mongodb').MongoClient;
const Account = require('./../Account.js');

class Accounts {
    constructor (config, collectionName) {
        let self = this;

        self._config = config;

        self._protocol = 'mongodb://';
        self._host = config.host;
        self._port = config.port;
        self._store = config.store;
        self._url = self._protocol + self._host + ':' + self._port + '/' + self._store;
        self._retryLimit = config.maxRetries;
        self._attempts = 0;
        self._onConnected = function () {};
        self._db = null;
        self._collection = null;
        self._collectionName = collectionName;

        self._connect();
    }

    set onConnected (val) { this._onConnected = val; }

    _connect () {
        let self = this;
        self._attempts++;

        mongo.connect(self._url, function (err, db) {
            if(err) {
                if(self._attempts > self._retryLimit) {
                    console.log(err.message + '\n' + err.stack);
                    throw err;
                } else {
                    self._connect();
                }
            }

            self._db = db;
            self._db.createCollection(self._collectionName, {}, function (cErr, collection) {
                if(cErr) {
                    throw cErr;
                }
                self._collection = collection;
                self._attempts = 0;
                self._onConnected();
            });
        });
    }

    _insert(o, cb) {
        let self = this;

        self._collection.insertOne(o.toJson(), function (err, result) {
            cb(err, result);
        });
    }

    _update(o, cb) {
        let self = this;

        self._collection.updateOne({id: o.id}, o.toJson(), function (err, result) {
            cb(err, result);
        });
    }

    save () {
        ///TODO: Implement this in each child service
    }

    query () {
        let self = this;
        return self._collection;
    }

    open (cb) {
        this._onConnected = cb;
        this._connect();
    }

    close () {
        this._db.close();
        this._db = null;
    }
}