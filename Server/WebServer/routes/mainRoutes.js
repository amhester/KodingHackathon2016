"use strict";

module.exports.register = function (app) {
    app.get('/main', function (req, res) {
        res.render('index.html');
    });

    app.get('/main/dashboard', function (req, res) {
        res.render('subviews/dashboard.html');
    });

    app.get('/main/charities', function (req, res) {
        res.render('subviews/charities.html');
    });

    app.get('/main/goalDetails', function (req, res) {
        res.render('subviews/goalDetails.html');
    });

    app.get('/main/goals', function (req, res) {
        res.render('subviews/goals.html');
    });

    app.get('/main/history', function (req, res) {
        res.render('subviews/history.html');
    });

    app.get('/main/newGoal', function (req, res) {
        res.render('subviews/newGoal.html');
    });

    app.get('/main/pastGoals', function (req, res) {
        res.render('subviews/pastGoals.html');
    });

    app.get('/main/profile', function (req, res) {
        res.render('subviews/profile.html');
    });
};