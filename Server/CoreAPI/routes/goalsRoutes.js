"use strict";

const Goal = require('./../../DataLayer/models/Goal');
const db = require('./../../DataLayer/DataRepository');

module.exports.register = function(server) {
    server.post('/goal', function (req, res, next) {
        console.log('/goal 1');
        let newGoal = new Goal(req.params.goal);
        console.log('/goal 2');
        let accountId = req.authContext.id;
        newGoal.accountId = accountId;

        console.log(newGoal);
        db.Goals.save(newGoal, function (err, result) {
            if(err) {
                res.send(500, err.message);
            } else {
                res.send(200, result.id);
            }
            next();
        });
    });

    server.get('/goal', function (req, res, next) {
        let accountId = req.authContext.id;
        db.Goals.query().find({accountId: accountId}).toArray(function (err, docs) {
            if(err) {
                res.send(500, err.message);
            } else {
                res.send(200, docs);
            }
            next();
        });
    });

    server.get('/goal/:id', function (req, res, next) {

        db.Goals.query().find({id: req.params.id}).limit(1).next(function (err, doc) {
            if(err) {
                res.send(500, err.message);
            } else {
                res.send(200, doc);
            }
            next();
        });
    });

    server.put('/goal', function (req, res, next) {

        let model = new Goal(req.params.goal);

        db.Goals.save(model, function (err, result) {
            if(err) {
                res.send(500, err.message);
            } else {
                res.send(200);
            }
            next();
        });
    });

    server.del('/goal/:id', function (req, res, next) {

        db.Goals.remove(req.params.id, function (err, result) {
            if(err) {
                res.send(500, err.message);
            } else {
                res.send(200);
            }
            next();
        });
    });
};