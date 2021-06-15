

function add(){
    var val = document.getElementById("input").value;
    var data = document.createTextNode(val)
    var ul = document.createElement("ul")
    var li = document.createElement("li")

    

    // delete buttons
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("Delete")
    delBtn.appendChild(delText)
    delBtn.setAttribute("class", "btn")
    delBtn.setAttribute("onclick", "delet(this)")
    
    // Edit buttons
    var editBtn = document.createElement("button")
    var editText = document.createTextNode("Edit")
    editBtn.appendChild(editText)
    editBtn.setAttribute("class", "btn")
    editBtn.setAttribute("onclick", "edit(this)")


    
    ul.appendChild(li)
    li.appendChild(data);
    li.appendChild(delBtn)
    li.appendChild(editBtn)

    // attribute applying
    li.setAttribute("class", "boxStyle")

    if(val == ""){
        alert("write ToDo first :)")
        
    }else{
        var display = document.getElementById("display")
        display.appendChild(li);
        val = document.getElementById("input").value = '';

    }
    
}

function delAll(){
    var display = document.getElementById("display")
    display.innerHTML = ""
}

function delet(e){
    e.parentNode.remove();
}

function edit(e){
    var replace = prompt("Edit value", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = replace
}

