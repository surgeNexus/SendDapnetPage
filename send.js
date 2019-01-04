#! /usr/bin/env node
'use strict';

const
    dapnet  = require('./services/dapnet-call'),
    args    = require('minimist')(process.argv.slice(2));

if (args.h || !args.c || !args.m || !args.t) {
    console.log("Usage:\n\t-c Call to send to\n\t-m Message to send\n\t-t Transmitter Group to use");
    console.log("For help on TX groups, see https://hampager.de/#/transmitters/groups");
} else if (config.get('user.api_user') === 'CHANGEME') {
    console.error("It seems you have to edit config/default.js. Set your call, api_user and api_pass.");
} else {
    dapnet.send([args.c],args.m,[args.t])
    .then(() => {
        console.log("Message(s) sent");
    })
    .catch((err) => {
        console.log("Oups, there was at least one error",err);
    });
}
