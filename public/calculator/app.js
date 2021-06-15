function getnumber(num){
    var result = document.getElementById("result")
    result.value += num;
}


function clr(){
    result = document.getElementById("result");
    result.value = "";
}

function getresult(){
    result= document.getElementById("result");
    result.value = eval(result.value)
}

function back(){
    result = document.getElementById("result");
    result.value = result.value.slice(0, result.value.length-1)
}