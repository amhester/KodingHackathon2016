'use strict';

var appConfig = require('./../app.config');
var stripe = require('stripe')(appConfig.stripeApiKey);

class StripePaymentService {

    constructor() {}


    /**
     * tokens
     * */
    createCardToken(card, cb) {
        stripe.tokens.create({
            card: {
                number: card.number,
                exp_month: card.exp_month,
                exp_year: card.exp_year,
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
        console.log(charge);
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


module.exports = StripePaymentService;
