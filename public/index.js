var socket = io();
var currentVote = -1;

window.onload = function(){
    socket.on('getVote', function(vote){
        console.log("got vote");
        console.log(vote);
        document.getElementById("status").innerHTML =  "Vote now!";
        document.getElementById("button1").innerHTML =  vote.op1;
        document.getElementById("button2").innerHTML =  vote.op2;
        document.getElementById("button3").innerHTML =  vote.op3;
        document.getElementById("button4").innerHTML =  vote.op4;
        resetButtons();
        setTimeout(submitVote, 15000);
    });
    socket.on('sendResults', function(votes){
        console.log(votes)
        console.log("got results");
    })
}

function button1(){
    currentVote = 0;
    resetButtons();
    document.getElementById("button1").classList.add('active');;
}

function button2(){
    currentVote = 1;
    resetButtons();
    document.getElementById("button2").classList.add('active');;
}

function button3(){
    currentVote = 2;
    resetButtons();
    document.getElementById("button3").classList.add('active');;
}

function button4(){
    currentVote = 3;
    resetButtons();
    document.getElementById("button4").classList.add('active');
}

function resetButtons(){
    document.getElementById("button1").classList.remove('active');
    document.getElementById("button2").classList.remove('active');
    document.getElementById("button3").classList.remove('active');
    document.getElementById("button4").classList.remove('active');
}

function submitVote(){
    if (currentVote != -1){
        socket.emit('submitVote', currentVote);
        document.getElementById("status").innerHTML =  "Sent vote.";
    }
    else{
        document.getElementById("status").innerHTML =  "Vote timed out.";
    }
    currentVote = 0;

    resetButtons()
    var strReset = "Awaiting choices..."
    document.getElementById("button1").innerHTML =  strReset;
    document.getElementById("button2").innerHTML =  strReset;
    document.getElementById("button3").innerHTML =  strReset;
    document.getElementById("button4").innerHTML =  strReset;
}