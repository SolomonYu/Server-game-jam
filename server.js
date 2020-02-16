var express = require('express'); 
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

var portnum = process.env.PORT || 8080;
var votes = [0,0,0,0]

app.use(express.static('public'));

io.on('connection', function(socket){
    console.log("new user connected");
    socket.on('disconnect', function(){
        console.log("user disconnected");
    });
    socket.on('requestVote', function(vote){
        io.emit('getVote', vote);
        console.log("sending votes...");
        console.log(vote);
        votes = [0,0,0,0];
        
    });
    socket.on('submitVote', function(voteNumber){
        console.log("vote received");
        votes[voteNumber] += 1;
        console.log(votes);
        var voteObject = {
            "ob1": votes[0],
            "ob2": votes[1],
            "ob3": votes[2],
            "ob4": votes[3]
        }
        io.emit('sendResults', voteObject);        
    })
});

http.listen(portnum, function(){
    console.log('app is listening on port: ' + portnum);
});


