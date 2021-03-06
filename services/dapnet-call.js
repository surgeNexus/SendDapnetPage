'use strict';

const
    config = require('config'),
    request = require('request'),
    _ = require('underscore');

function send(destination,message,tx,emg) {
    return new Promise((resolve,reject) => {
        console.log(emg);
        if (!message)
            reject("no message given");
        if (!destination || !destination[0])
            reject("no destination call(s) given or no array");
        if (config.get('dapnet.shorten_messages') === false && message.length > config.get('max_message_size'))
            reject("message too long!")
        if (config.get('dapnet.shorten_messages') === true && message.length > config.get('dapnet.max_message_size'))
            message = message.substring(0,config.get('dapnet.max_message_size'));
        if (!tx)
            tx = config.get('dapnet.default_tx');
        let called = _.map(destination,(call) => {
            return new Promise((res2,rej2) => {
                let payload = {
                    text: config.get('user.own_call') + ": " + message,
                    callSignNames: [call],
                    transmitterGroupNames: tx,
                    emergency: emg
                }
                request({
                    url: config.get('dapnet.api_url'),
                    method: 'POST',
                    headers: {
                        'Authorization': 'Basic' + ' ' + Buffer.from(config.get('user.api_user') + ':' + config.get('user.api_pass')).toString('base64')
                    },
                    json: true,
                    body: payload
                }, (err, response, body) => {
                    if (err)
                        rej2(err);
                    else if (response && response.statusCode === 201) {
                        res2();
                    } else {
                        rej2(response.body);
                    }
                });
            });
        });
        Promise.all(called)
        .then(resolve)
        .catch(reject);
    });
}

module.exports = {
    send: send
};