import coconut = require("../lib/coconut");

var server = new coconut.CoconutServer('udp6', 8080);
server.appendHandler<string>(function(_in, _out){
    _out.send('hi');
});