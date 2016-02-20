'use strict';

var StripePaymentService = require('./../services/StripePaymentService');

let service = new StripePaymentService();
let root = '/paymentService/';

module.exports.register = function( server ) {

    server.post(root + 'token', function(req, res, next) {
        console.log(req.body);
       service.createCardToken(req.body, function(err, token) {
           if (err) {
               res.send(500, err.message);
           }
           res.send(token);
           console.log(token);
           next();
       });
    });

    server.post(root + 'charge', function(req, res, next) {
        var charge = req.body;
        service.charge(charge, function(err, charge) {
            if (err) {
                res.send(500, err.message);
            }
            console.log(charge);
           next();
        });
    });
};