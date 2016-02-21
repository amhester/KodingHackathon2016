"use strict";

module.exports.register = function (app) {
    app.get('/login', function (req, res) {
        res.render('login.html');
    });

    app.get('/login/signIn', function (req, res) {
        res.render('subviews/signIn.html');
    });

    app.get('/login/register', function (req, res) {
        res.render('subviews/register.html');
    });
};