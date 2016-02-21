'use strict';

var StripePaymentService = require('./../services/stripePaymentService');

let service = new StripePaymentService();
let root = '/paymentService/';

module.exports.register = function( server ) {

    /**
     * tokens
     * */
    server.post(root + 'token', function(req, res, next) {
       service.createCardToken(req.params, function(err, token) {
           if (err) {
               res.send(500, err.message);
           }
           res.send(token);
           next();
       });
    });

    server.get(root + 'getToken/:tokenId', function(req, res, next) {
        service.getToken(req.params.tokenId, function(err, token) {
            if (err) {
                res.send(500, err.message);
            }
            res.send(token);
            next();
        });
    });


    /**
     * customer
     * */
    server.post(root + 'createCustomer', function(req, res, next) {
        service.createCustomer(req.params, function(err, customer) {
            if (err) {
                res.send(500, err.message);
            }
            res.send(customer);
            next();
        });
    });

    server.post(root + 'updateCustomer', function(req, res, next) {
        service.updateCustomer(req.params, function(err, customer) {
            if (err) {
                res.send(500, err.message);
            }
            res.send(customer);
            next();
        });
    });

    server.get(root + 'getCustomer/:customerId', function(req, res, next) {
       service.getCustomer(req.params.customerId, function(err, customer) {
           if (err) {
               res.send(500, err.message);
           }
           res.send(customer);
           next();
       });
    });

    server.post(root + 'deleteCustomer', function(req,  res, next) {
       service.deleteCustomer(req.params.customerId, function(err, success) {
          if (err) {
              res.send(500, err.message);
          }
           res.send(success);
           next();
       });
    });


    /**
     * charges
     * */
    server.post(root + 'charge', function(req, res, next) {
        service.charge(req.params, function(err, charge) {
            if (err) {
                res.send(500, err.message);
            }
            res.send(charge);
           next();
        });
    });

    server.get(root + 'getCharge', function(req, res, next) {
       service.getCharge(req.params.chargeId, function(err, charge) {
          if (err) {
              res.send(500, err.message);
          }
           res.send(charge);
           next();
       });
    });


};