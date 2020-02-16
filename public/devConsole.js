var socket = io();

var vote = {
    "op1" : "Spider",
    "op2" : "Harpy",
    "op3" : "Lamia",
    "op4" : "Slime"
}

function sendRequestVote(){
    console.log("Sending vote request to server...")
    socket.emit("requestVote", vote)
}

function sendResult(){
    console.log("sending test result...")
    socket.emit("submitVote",1)
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

    //update UI with new totals
    document.getElementById("option1").textContent=toString(votes[0]);
    document.getElementById("option2").textContent=toString(votes[1]);
    document.getElementById("option3").textContent=toString(votes[2]);
    document.getElementById("option4").textContent=toString(votes[3]);
})

