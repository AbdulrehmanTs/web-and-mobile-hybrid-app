


function Time(){
    var date = new Date();
    var h =date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var am_pm = "am"

    if (h>12){
        h-=12;
        am_pm = "pm"
    }
    if (h <12 ){
        am_pm = "am"
    }

    h = h<10 ? "0"+ h : h;
    m = m<10 ? "0"+ m : m;
    s = s<10 ? "0" + s: s;
    
    let current = h +" : "+ m +" : "+ s +" "+ am_pm;

    var display = document.getElementById("display");
    display.innerHTML = current;
}

setInterval(Time, 1000);





