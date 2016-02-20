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

    getCustomer(id, cb) {
        stripe.customers.retrieve(id, function(err, customer) {
            cb(err, customer);
        });
    }

    updateCustomer(customerId, customer, cb) {
        stripe.customers.update(customerId, {
            description: customer.description,
            source: customer.source
        }, function(err, customer) {
            cb(err, customer);
        });
    }


}




let service = new StripePaymentService();

service.getToken({
    number: '4242424242424242',
    month: 12,
    year: 2017,
    cvc: '123'
}, function(err, token) {
    if (!err) {
        service.createCustomer({
            description: "test customer",
            source: token.id
        }, function(err, customer) {
            if (!err) {
                console.log(customer);
            } else {
                console.log(err);
            }
        });
    } else {
        console.log(err);
    }
});