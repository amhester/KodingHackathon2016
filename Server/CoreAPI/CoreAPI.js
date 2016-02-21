"use strict";

const restify = require('restify');
const appConfig = require('./../app.config.json').CoreAPI;
const uuid = require('node-uuid');
const logger = console;
const authMiddleware = require('./middleware/authMiddleware');

var accountRoutes = require('./routes/accountRoutes.js');
var charitiesRoutes = require('./routes/charitiesRoutes.js');
var goalsRoutes = require('./routes/goalsRoutes.js');
var notificationRoutes = require('./routes/notificationRoutes.js');
var transactionRoutes = require('./routes/transactionRoutes.js');


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
/*server.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, x-winwin-token, Content-Type, X-Requested-With, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    next();
});*/
restify.CORS.ALLOW_HEADERS.push('Accept-Encoding');
restify.CORS.ALLOW_HEADERS.push('Accept-Language');
restify.CORS.ALLOW_HEADERS.push('x-winwin-token');
server.pre(restify.CORS());
server.use(restify.acceptParser(server.acceptable));
server.use(restify.dateParser());
server.use(restify.queryParser());
server.use(restify.gzipResponse());
server.use(restify.bodyParser());
server.use(authMiddleware.authWall);

/* ----------------- Register API Routes Here ----------------------- */
//Our actual security/permissions api endpoints
accountRoutes.register(server);
charitiesRoutes.register(server);
goalsRoutes.register(server);
notificationRoutes.register(server);
transactionRoutes.register(server);

/* ----------------- Start API Here --------------------------------- */
server.listen(appConfig.port, appConfig.host, function () {
    logger.log("Core API running, listening on " + server.url);
});

/* ----------------- Module Exports (for testing) ------------------- */
module.exports = server;
