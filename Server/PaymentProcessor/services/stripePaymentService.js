'use strict';

//var request = require('request');
var stripe = require('stripe')('sk_test_TRhxySsqxowHHDwGOlx7WTcz');

class StripePaymentService {

    constructor() {}


    /**
     * tokens
     * */
    createCardToken(card, cb) {
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

    getToken(tokenId, cb) {
        stripe.tokens.retrieve(tokenId, function(err, token) {
            if (!err) {
                cb(err, token);
            }
        });

    }


    /**
     * customers
     * */
    createCustomer(customer, cb) {
        stripe.customers.create({
            description: customer.description,
            source: customer.tokenId
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
            source: customer.tokedId
        }, function(err, customer) {
            cb(err, customer);
        });
    }

    deleteCustomer(customerId, cb) {
        stripe.customers.del(customerId, function(err, confirmation) {
            cb(err, confirmation);
        });
    }


    /**
     * charges
     * */
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



/* for testing */

/*
let service = new StripePaymentService();

service.createCardToken({
    number: '378282246310005',
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
*/