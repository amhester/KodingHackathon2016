'use strict';

let SparkPost = require('sparkpost');

class SparkpostEmailService {
    constructor() {
        this.sparky = new SparkPost('b8edcdc174f7cd94f255a2cce078d16583fa6d7a');
    }

    sendEmail(recipients, fromAddress, subject, message, callback) {
        let _recipients = [];
        for (let i = 0; i < recipients.length; i++) {
            _recipients.push({address: recipients[i]});
        }
        this.sparky.transmissions.send({
            transmissionBody: {
                content: {
                    from: fromAddress,
                    subject: subject,
                    html: message
                },
                recipients: _recipients
            }
        }, function(err, res) {
            callback(err, res);
        });
    }
}

module.exports = SparkpostEmailService;