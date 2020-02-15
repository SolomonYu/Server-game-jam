var socket = io();

var vote = {
    "op1" : "one",
    "op2" : "two",
    "op3" : "three",
    "op4" : "four"
}

function sendRequest(){
    console.log("Sending...")
    socket.emit("requestVote", vote)
}
