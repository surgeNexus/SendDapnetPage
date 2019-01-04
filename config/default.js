'use strict';

module.exports = {
    dapnet: {
        // service api:
        api_url: 'http://www.hampager.de:8080/calls',
        // max allowed message length in characters
        max_message_size: 80,
        // messages being to long will be shortened automagically.
        // set to "false" to get an error instead.
        shorten_messages: true,
        // please be careful about that and use the smallest tx group possible!
        default_tx: ['dl-all']
    },
    user: {
        // obviously, you have to change all this
        own_call: 'CHANGEME',
        api_user: 'CHANGEME',
        api_pass: 'CHANGEME'
    }
};
