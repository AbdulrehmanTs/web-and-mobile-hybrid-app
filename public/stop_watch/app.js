var msec = document.getElementById("sec");
var sec = document.getElementById("min");
var min = document.getElementById("hour");
var interval;
var val = 0;


function counter(){
    val++
    msec.innerHTML = val

    if (msec.innerHTML >= 100){
        val = 0;
        sec.innerHTML++
        if(sec.innerHTML == 60){
            sec.innerHTML = 0;
            min.innerHTML++
        }
    }
    

}

function start(){
    interval = setInterval(counter, 10)
}


function pause(){
    clearInterval(interval)
}

function reset(){
    msec.innerHTML = "00";
    sec.innerHTML = "00";
    min.innerHTML = "00";
    pause()
}