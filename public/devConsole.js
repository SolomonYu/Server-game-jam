var socket = io();

var vote = {
    "op1" : "one",
    "op2" : "two",
    "op3" : "three",
    "op4" : "four"
}

function sendRequestVote(){
    console.log("Sending vote request to server...")
    socket.emit("requestVote", vote)
}

// socket.on('displayVotes', function(vote) {
//     console.log(vote.op1)
// })

socket.on('sendResults', function(votes) {
    console.log("Received vote totals")
    console.log(votes)
    console.log(`Option 1: ${votes[0]} votes`)
    console.log(`Option 2: ${votes[1]} votes`)
    console.log(`Option 3: ${votes[2]} votes`)
    console.log(`Option 4: ${votes[3]} votes`)
})

