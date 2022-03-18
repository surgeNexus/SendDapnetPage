# Credit where credit is due
This project has been forked from @eljudni
He did all of the hard work, I just converted to a function that can be called in other Node apps.


# dapnet-example
Small node-script to send messages via the HAM-built DAPNET paging network

## DAPNET?
Maybe you can remember the "Skyper", "Scall" and-so-on networks?
Well, Radio Amateurs are rebuilding this network for their use-cases, on amateur radio frequencies.

## Can I send messages without being a HAM?
No. Sorry. It's neither legal nor possible, as you have to register with a valid HAM license to get an account/API access.

## Oh, I got a license!
Great! Head to hampager.de, get an account and start paging again. There is plenty of information on how to use, which hardware works, how you can modify your old Skyper.

## How to use this script
* Make sure you have nodejs installed
* Change into the created directory
* Install libraries with `npm install`
* Edit `config/default.js` and change your call, api login name and api password
* Require `send.js` as follows `const sendMessage = require('Path/to/project/root')`
* Call function: 
      `sendMessage(["Recipients", "Here"], "Add your message here", "Transmitter-group", Emergency)`
                                                                                        If set true, will send as emergency. If no value, will not.

Thanks again to @eljudni for all of the hard work. 

73 de K4AVG
