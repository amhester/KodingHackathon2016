'use strict';

//var request = require('request');
var stripe = require('stripe')('sk_test_TRhxySsqxowHHDwGOlx7WTcz');

class StripePaymentService {

    constructor() {}

    createToken(card, cb) {
        stripe.tokens.create({
            card: {
                number: card.number,
                exp_month: card.month,
                exp_year: card.year,
                cvc: card.cvc
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

    deleteCustomer(customerId, cb) {
        stripe.customers.del(customerId, function(err, confirmation) {
            cb(err, confirmation);
        });
    }

    charge(charge, cb) {
        stripe.charges.create({
            amount: charge.amount,
            currency: charge.currency,
            source: charge.tokenId,
            description: charge.description
        }, function(err, charge) {
            cb(err, charge);
        });
    }

    getCharge(chargeId, cb) {
        stripe.charges.retrieve(chargeId, function(err, charge) {
            cb(err, charge);
        });
    }


}




let service = new StripePaymentService();

service.createToken({
    number: '4111111111111111',
    month: 12,
    year: 2017,
    cvc: '123'
}, function(err, token) {
    if (!err) {
       service.charge({
           amount: 50,
           currency: 'usd',
           tokenId: token.id,
           description: 'test charge'
       }, function(err, charge) {

           if (!err) {

               service.getCharge('ch_17gbQXJ5PmIpog0Pgc4eqmNn', function(err, charge) {
                  console.log(charge);
               });
           }
           else {
               console.log(err);
           }
       });
    } else {
        console.log(err);
    }
});