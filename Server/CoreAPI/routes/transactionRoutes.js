"use strict";

const Transaction = require('./../../DataLayer/models/Transaction');
const db = require('./../../DataLayer/DataRepository');

module.exports.register = function(server) {
    server.post('/transaction', function (req, res, next) {
        let newTransaction = new Transaction(req.params.transaction);

        db.Transactions.save(newTransaction, function (err, result) {
            if(err) {
                res.send(500, err.message);
            } else {
                res.send(200, result.id);
            }
            next();
        });
    });

    server.get('/transaction', function (req, res, next) {
        db.Transactions.query().find().toArray(function (err, docs) {
            if(err) {
                res.send(500, err.message);
            } else {
                res.send(200, docs);
            }
            next();
        });
    });

    server.get('/transaction/:id', function (req, res, next) {

        db.Transactions.query().find({id: req.params.id}).limit(1).next(function (err, doc) {
            if(err) {
                res.send(500, err.message);
            } else {
                res.send(200, doc);
            }
            next();
        });
    });

    server.put('/transaction', function (req, res, next) {

        let model = new Transaction(req.params.transaction);

        db.Transactions.save(model, function (err, result) {
            if(err) {
                res.send(500, err.message);
            } else {
                res.send(200);
            }
            next();
        });
    });

    server.del('/transaction/:id', function (req, res, next) {

        db.Transactions.remove(req.params.id, function (err, result) {
            if(err) {
                res.send(500, err.message);
            } else {
                res.send(200);
            }
            next();
        });
    });
};