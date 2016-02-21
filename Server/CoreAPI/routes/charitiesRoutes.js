"use strict";

const appConfig = require('./../app.config.json');
const Charity = require('./../../DataLayer/models/Charity');
const db = require('./../../DataLayer/DataRepository');

module.exports.register = function(server) {
    //server.post('/charity', function (req, res, next) {
    //    let newCharity = new Charity(req.params.charity);
    //
    //    db.Charities.save(newCharity, function (err, result) {
    //        if(err) {
    //            res.send(500, err.message);
    //        } else {
    //            res.send(200, result.id);
    //        }
    //        next();
    //    });
    //});

    server.get('/charity', function (req, res, next) {
        db.Charities.query().find().toArray(function (err, docs) {
            if(err) {
                res.send(500, err.message);
            } else {
                res.send(200, docs);
            }
            next();
        });
    });

    server.get('/charity/:id', function (req, res, next) {

        db.Charities.query().find({id: req.params.id}).limit(1).next(function (err, doc) {
            if(err) {
                res.send(500, err.message);
            } else {
                res.send(200, doc);
            }
            next();
        });
    });

    //server.put('/charity', function (req, res, next) {
    //
    //    let model = new Charity(req.params.charity);
    //
    //    db.Charities.save(model, function (err, result) {
    //        if(err) {
    //            res.send(500, err.message);
    //        } else {
    //            res.send(200);
    //        }
    //        next();
    //    });
    //});

    //server.del('/charity/:id', function (req, res, next) {
    //
    //    db.Charities.remove(req.params.id, function (err, result) {
    //        if(err) {
    //            res.send(500, err.message);
    //        } else {
    //            res.send(200);
    //        }
    //        next();
    //    });
    //});
};