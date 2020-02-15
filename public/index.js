var socket = io();
var currentVote = 0;


socket.on('getVote', function(vote){
    document.getElementById("status").innerHTML =  "Vote now!";
    document.getElementById("button1").innerHTML =  vote.op1;
    document.getElementById("button2").innerHTML =  vote.op2;
    document.getElementById("button3").innerHTML =  vote.op3;
    document.getElementById("button4").innerHTML =  vote.op4;
    setTimeout(submitVote, 10000);
});

function button1(){
    currentVote = 0;
    document.getElementById("button1").className = 'button active';
}

function button2(){
    currentVote = 1;
    document.getElementById("button1").className = 'button active';
}

function button3(){
    currentVote = 2;
    document.getElementById("button1").className = 'button active';
}

function button4(){
    currentVote = 3;
    document.getElementById("button1").className = 'button active';
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
    currentVote = 0;
    document.getElementById("status").innerHTML =  "Vote timed out.";
    
}