"use strict";

const config = require('./../app.config.json');
const express = require('express');
const whiskers = require('whiskers');
const https = require('https');
const http = require('http');
const fs = require('fs');

const loginRoutes = require('./routes/loginRoutes');
const mainRoutes = require('./routes/mainRoutes');

var app = express();

if(config.WebServer.protocol == 'https') {
    app.all('*', function(req, res, next){
        if (req.secure) {
            return next();
        }
        res.redirect('https://' + config.WebServer.host + ':' + config.WebServer.port + req.url);
    });
}

const publicDir = __dirname + '/../../Public';
console.log(publicDir);

app.use('/scripts', express.static(publicDir + '/scripts'));
app.use('/lib', express.static(publicDir + '/lib'));
app.use('/content', express.static(publicDir + '/content'));
app.use('/templates', express.static(publicDir + '/views/templates'));
app.set('views', publicDir + '/views');
app.engine('.html', whiskers.__express);

loginRoutes.register(app);
mainRoutes.register(app);

if(config.WebServer.protocol == 'https') {
    var secureServer = https.createServer({
        key: fs.readFileSync(config.ssl.key),
        cert: fs.readFileSync(config.ssl.cert)
    }, app).listen(config.WebServer.port, config.WebServer.host, function () {
        console.log('secure web server running...');
    });

    var insecureServer = http.createServer(app).listen(config.WebServer.port, config.WebServer.host, function() {
        console.log('Insecure web server running...');
    })
} else {
    app.listen(config.WebServer.port, config.WebServer.host, function () {
        console.log('web server running...');
    });
}