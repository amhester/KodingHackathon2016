'use strict';


var SparkPost = require('sparkpost');
var sparky = new SparkPost('cb48dfa703792cb83643eec187139cdd9ee335c7');

sparky.transmissions.send({
   transmissionBody: {
       content: {
           from: 'testing@sparkpostbox.com',
           subject: 'Oh hey!',
           html: "<html><body><p>Testing SparkPost - the world's most awesomest email service!</p></body></html>"
       },
       recipients: [
           {address: 'djragsdale@sparkpost.com'}
       ]
   }
}, function(err, res) {
    if (err) {
        console.log('Whoops! Something went wrong');
        console.log(err);
    } else {
        console.log('Woohoo! You just sent your first mailing!');
    }
});
