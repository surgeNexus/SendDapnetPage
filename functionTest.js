const sendMessage = require('./send');

// If emergency is blank, default is false. If any value is input in the fourth arg, will send true.

// dest/msg/txgroup,emergency
sendMessage("CHANGEME", "CHANGEME: this is a test", "us-all");