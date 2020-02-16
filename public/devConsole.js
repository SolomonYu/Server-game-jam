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
    console.log(`Option 1: ${votes.ob1} votes`)
    console.log(`Option 2: ${votes.ob2} votes`)
    console.log(`Option 3: ${votes.ob3} votes`)
    console.log(`Option 4: ${votes.ob4} votes`)

    //update UI with new totals
    document.getElementById("option1").innerHTML= votes.ob1;
    document.getElementById("option2").innerHTML= votes.ob2;
    document.getElementById("option3").innerHTML= votes.ob3;
    document.getElementById("option4").innerHTML= votes.ob4;
})

