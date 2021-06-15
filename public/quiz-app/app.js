
function getAnswer(){
    var score = +(0);
    var answer1 = document.getElementById("q1a1");
    var answer2 = document.getElementById("q1a2");
    var answer3 = document.getElementById("q1a3");
    var answer4 = document.getElementById("q1a4");
    if (answer2.checked == true){
        alert("Correct!")
        alert("score is "+ (score = score+1))
    }
    else {
        alert("answer is not correct")
    }
}

var time= 0;
var interval;

function timer(){
    time++
    var second = document.getElementById("time")
    second.innerHTML = time+" / 20s";
}
interval = setInterval(timer,1000)

setTimeout(function(){
    clearInterval(interval)
}, 20000)
