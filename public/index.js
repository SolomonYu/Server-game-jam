var socket = io();
var currentVote = 0;

socket.on('getVote', function(vote){
    document.getElementById("button1").innerHTML =  vote.op1;
    document.getElementById("button1").innerHTML =  vote.op2;
    document.getElementById("button1").innerHTML =  vote.op3;
    document.getElementById("button1").innerHTML =  vote.op4;
    setTimeout()
});

function button1(){
    currentVote = 1;
}

function button2(){
    currentVote = 2;
}

function button3(){
    currentVote = 3;
}

function button4(){
    currentVote = 4;
}

function submitVote(){
    socket.emit('submitVote', currentVote)
}