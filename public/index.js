var socket = io();
var currentVote = 0;

window.onload = function(){
    socket.on('getVote', function(vote){
        console.log("got vote");
        document.getElementById("status").innerHTML =  "Vote now!";
        document.getElementById("button1").innerHTML =  vote.op1;
        document.getElementById("button2").innerHTML =  vote.op2;
        document.getElementById("button3").innerHTML =  vote.op3;
        document.getElementById("button4").innerHTML =  vote.op4;
        resetButtons();
        setTimeout(submitVote, 15000);
    });
}

function button1(){
    currentVote = 0;
    resetButtons();
    document.getElementById("button1").className = 'button active';
}

function button2(){
    currentVote = 1;
    resetButtons();
    document.getElementById("button2").className = 'button active';
}

function button3(){
    currentVote = 2;
    resetButtons();
    document.getElementById("button3").className = 'button active';
}

function button4(){
    currentVote = 3;
    resetButtons();
    document.getElementById("button4").className = 'button active';
}

function resetButtons(){
    document.getElementById("button1").className = 'button';
    document.getElementById("button2").className = 'button';
    document.getElementById("button3").className = 'button';
    document.getElementById("button4").className = 'button';
}

function submitVote(){
    if (currentVote != 0){
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