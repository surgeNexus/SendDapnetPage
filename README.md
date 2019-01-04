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
* Get a copy by `git clone git@github.com:eljudni/dapnet-example`
* Change into the created directory
* Edit `config/default.js` and change your call, api login name and api password
* On Linux, `chmod +x send.js`. Then you may run `./send.js <options>`
* On Mac/Windows, sorry, no idea what you have to do to make it executable. As long as `node` is in your $PATH, just run `node send.js <options>`
* Options:
    * -c <call> - the call to send to
    * -m <message> - the message you want to send
    * -t <txgroup> - choose the TransmitterGroup to send on. See hampager.de for a list of txgroups.

Good luck!

do5ema, Jan 2019 (usually in txgroup dl-by)
