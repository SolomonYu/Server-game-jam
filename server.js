var express = require('express'); 
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

var portnum = process.env.PORT || 8080;
var currentUsers = 0;

app.use(express.static('public'));
// app.get('/', function(req, res){
//     res.sendFile(__dirname + '/public/index.html');
// });

io.on('connection', function(socket){
    console.log("new user connected");
    currentUsers++;
    socket.on('disconnect', function(){
        console.log("user disconnected");
        currentUsers--;
    });
});

http.listen(portnum, function(){
    console.log('app is listening on port: ' + portnum);
});

