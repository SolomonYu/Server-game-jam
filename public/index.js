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
        var total = parseInt(votes.ob1) + parseInt(votes.ob2) + parseInt(votes.ob3) + parseInt(votes.ob4);

        var currentPercent = Math.floor(76 - ((parseInt(votes.ob1)/total)*54));
        document.getElementById("graph1").style.marginRight = currentPercent + "%"
        document.getElementById("graph1").innerHTML = votes.ob1;
        var currentPercent = Math.floor(76 - ((parseInt(votes.ob2)/total)*54));
        document.getElementById("graph2").style.marginRight = currentPercent + "%"
        document.getElementById("graph2").innerHTML = votes.ob2;
        var currentPercent = Math.floor(76 - ((parseInt(votes.ob3)/total)*54));
        document.getElementById("graph3").style.marginRight = currentPercent + "%"
        document.getElementById("graph3").innerHTML = votes.ob3;
        var currentPercent = Math.floor(76 - ((parseInt(votes.ob4)/total)*54));
        document.getElementById("graph4").style.marginRight = currentPercent + "%"
        document.getElementById("graph4").innerHTML = votes.ob4;
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
    currentVote = -1;

    resetButtons()
    var strReset = "Awaiting choices..."
    document.getElementById("button1").innerHTML =  strReset;
    document.getElementById("button2").innerHTML =  strReset;
    document.getElementById("button3").innerHTML =  strReset;
    document.getElementById("button4").innerHTML =  strReset;
}