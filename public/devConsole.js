var socket = io();

var vote = {
    "op1" : "one",
    "op2" : "two",
    "op3" : "three",
    "op4" : "four"
}

votes = [0,0,0,0]

function sendRequestVote(){
    console.log("Sending vote request to server...")
    io.emit("requestVote", vote)
}

// socket.on('displayVotes', function(vote) {
//     console.log(vote.op1)
// })

socket.on('sendResults', function(votes) {
    console.log("Received vote totals")
    console.log(`Option 1: ${votes.op1} votes`)
    console.log(`Option 2: ${votes.op2} votes`)
    console.log(`Option 3: ${votes.op3} votes`)
    console.log(`Option 4: ${votes.op4} votes`)
})

