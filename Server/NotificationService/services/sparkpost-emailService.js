'use strict';

let SparkPost = require('sparkpost');

class SparkpostEmailService {
    constructor() {
        console.log('new SparkpostEmailService');
        this.sparky = new SparkPost('cb48dfa703792cb83643eec187139cdd9ee335c7');
    }

    sendEmail(recipients, fromAddress, subject, message) {
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
            if (err) {
                console.log('Whoops! Something went wrong');
                console.log(err);
                return {"success": false, "error": err, "response": res}
            } else {
                console.log('Woohoo! You just sent your first mailing!');
                return {"success": true, "response": res}
            }
        });
    }
}