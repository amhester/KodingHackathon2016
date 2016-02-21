"use strict";

const appConfig = require('./../../app.config.json');
const Account = require('./../../DataLayer/models/Account');
const db = require('./../../DataLayer/DataRepository');
const AuthService = require('./../../DataLayer/services/AuthService');
const jwt = require('jsonwebtoken');

const auth = new AuthService(appConfig);

module.exports.register = function(server) {
    server.post('/account', function (req, res, next) {
        let newAccount = new Account(req.params.account);

        auth.register(newAccount, function (err, result) {
            if(err) {
                res.send(500, err.message);
            } else {
                res.send(200, result.id);
            }
            next();
        });
    });

    server.get('/token', function (req, res, next) {
        console.log(req);
        let email = req.params.email;
        let password = req.params.password;

        auth.signIn(email, password, function (err, result) {
            if(err) {
                res.send(500, err.message);
            } else {
                if(result) {
                    res.send(200, jwt.sign({ id: result.id, email: result.email, displayName: result.displayName }, appConfig.CoreAPI.appSecret));
                } else {
                    res.send(404);
                }
            }
            next();
        });
    });

    server.get('/account/:id', function (req, res, next) {
        if(req.params.id !== req.authContext.id) {
            res.send(404);
        }

        db.Accounts.query().find({id: req.params.id}).limit(1).next(function (err, doc) {
            if(err) {
                res.send(500, err.message);
            } else {
                let model = new Account(doc).toJson();
                delete model['passwordHash'];
                res.send(200, model);
            }
            next();
        });
    });

    server.put('/account', function (req, res, next) {
        if(req.params.account.id !== req.authContext.id) {
            res.send(404);
        }

        let model = new Account(req.params.account);

        db.Accounts.save(model, function (err, result) {
            if(err) {
                res.send(500, err.message);
            } else {
                res.send(200);
            }
            next();
        });
    });

    server.del('/account/:id', function (req, res, next) {
        if(req.params.id !== req.authContext.id) {
            res.send(404);
        }

        db.Accounts.remove(req.params.id, function (err, result) {
            if(err) {
                res.send(500, err.message);
            } else {
                res.send(200);
            }
            next();
        });
    });
};