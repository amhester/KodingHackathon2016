"use strict";

const appConfig = require('./../app.config.json');
const Account = require('./../../DataLayer/models/Account');
const Accounts = require('./../../DataLayer/services/Accounts');
const AuthService = require('./../../DataLayer/services/AuthService');
const jwt = require('jsonwebtoken');

const auth = new AuthService(appConfig);
const accounts = new Accounts(appConfig.mongo);

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

    server.post('/token', function (req, res, next) {
        let email = req.params.email;
        let password = req.params.password;

        auth.signIn(email, password, function (err, result) {
            if(err) {
                res.send(500, err.message);
            } else {
                res.send(200, jwt.sign({ id: result.id, email: result.email, displayName: result.displayName }, appConfig.appSecret));
            }
            next();
        });
    });

    server.get('/account/:id', function (req, res, next) {
        if(req.params.id !== req.authContext.id) {
            res.send(404);
        }

        accounts.query().find({id: req.params.id}).limit(1).next(function (err, doc) {
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

        accounts.save(model, function (err, result) {
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

        accounts.remove(req.params.id, function (err, result) {
            if(err) {
                res.send(500, err.message);
            } else {
                res.send(200);
            }
            next();
        });
    });
};