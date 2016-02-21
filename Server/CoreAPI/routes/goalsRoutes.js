"use strict";

const appConfig = require('./../app.config.json');
const Goal = require('./../../DataLayer/models/Goal');
const Goals = require('./../../DataLayer/services/Goals');

const goals = new Goals(appConfig.mongo);

module.exports.register = function(server) {
    server.post('/goal', function (req, res, next) {
        let newGoal = new Goal(req.params.goal);

        goals.save(newGoal, function (err, result) {
            if(err) {
                res.send(500, err.message);
            } else {
                res.send(200, result.id);
            }
            next();
        });
    });

    server.get('/goal', function (req, res, next) {
        goals.query().find().toArray(function (err, docs) {
            if(err) {
                res.send(500, err.message);
            } else {
                res.send(200, docs);
            }
            next();
        });
    });

    server.get('/goal/:id', function (req, res, next) {

        goals.query().find({id: req.params.id}).limit(1).next(function (err, doc) {
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

        goals.save(model, function (err, result) {
            if(err) {
                res.send(500, err.message);
            } else {
                res.send(200);
            }
            next();
        });
    });

    server.del('/goal/:id', function (req, res, next) {

        goals.remove(req.params.id, function (err, result) {
            if(err) {
                res.send(500, err.message);
            } else {
                res.send(200);
            }
            next();
        });
    });
};