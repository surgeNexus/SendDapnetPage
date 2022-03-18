#! /usr/bin/env node
'use strict';

const
    config  = require('config'),
    dapnet  = require('./services/dapnet-call'),
    args    = require('minimist')(process.argv.slice(2));

function sendMessage(call, message, txgroup, emg){
    args.c = call;
    args.m = message;
    args.t = txgroup;
    if (args.h || !args.c || !args.m || !args.t) {
        console.log("Usage:\n\t-c Call to send to\n\t-m Message to send\n\t-t Transmitter Group to use");
        console.log("For help on TX groups, see https://hampager.de/#/transmitters/groups");
    } else if (config.get('user.api_user') === 'CHANGEME') {
        console.error("It seems you have to edit config/default.js. Set your call, api_user and api_pass.");
        process.exit(1);
    } else {
        if(!emg){
            emg = false;
        } else {
            emg = true;
        }
        dapnet.send([args.c],args.m,[args.t], emg)
        .then(() => {
            console.log("Message(s) sent");
            process.exit(0);
        })
        .catch((err) => {
            console.error("Oups, there was at least one error",err);
            process.exit(1);
        });
    }
}

module.exports = sendMessage;