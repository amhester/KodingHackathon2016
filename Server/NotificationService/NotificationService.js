"use strict";

//let moduleName = 'DP.services';
var restify = require('restify');
var appConfig = require('./../app.config.json').NotificationService;
var uuid = require('node-uuid');

var routes = require('./routes/notificationRoutes.js');


/* ----------------- Other Global Stuff ----------------------------- */
var server = restify.createServer({
    name: appConfig.name,
    version: appConfig.version
});

process.on('beforeExit', function () {
    ///TODO: add some code to execute before exit (maybe db connection closing?)
});

process.on('uncaughtException', function (err) {
    logger.log(err);
    ///TODO: Cleanup app stuff here
    process.exit(7);
});

process.on('SIGHUP', function () {
    ///TODO: clean up app before exit
    process.exit();
});

process.on('SIGINT', function () {
    ///TODO: clean up app before exit
    process.exit();
});

//Catches responses after a route is done handling the request
server.on('after', function (req, res, route, error) {
});

server.on('NotFound', function (req, res, error, cb) {
    res.send(404);
});

/* ----------------- Register API Middleware Here ------------------- */
server.use(restify.acceptParser(server.acceptable));
server.use(restify.dateParser());
server.use(restify.queryParser());
server.use(restify.gzipResponse());
server.use(restify.bodyParser());
server.use(restify.CORS());

/* ----------------- Register API Routes Here ----------------------- */
//Our actual security/permissions api endpoints
routes.register(server);

/* ----------------- Start API Here --------------------------------- */
server.listen(appConfig.port, appConfig.host, function () {
    console.log("NotificationService running, listening on " + server.url);
});

/* ----------------- Module Exports (for testing) ------------------- */
module.exports = server;
