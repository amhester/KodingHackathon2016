'use strict';

//var request = require('request');
var stripe = require('stripe')('sk_test_TRhxySsqxowHHDwGOlx7WTcz');

class StripePaymentService {

    constructor() {}

    getToken(card, cb) {
        stripe.tokens.create({
            card: {
                "number": card.number,
                "exp_month": card.month,
                "exp_year": card.year,
                "cvc": card.cvc
            }
        }, function(err, token) {
            cb(err,token);
        });
    }

    createCustomer(customer, cb) {
        stripe.customers.create({
            description: customer.description,
            source: customer.source
        }, function(err, customer) {
            cb(err, customer);
        });
    }

}


