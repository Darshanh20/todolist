const text = document.getElementById("text");
const box = document.getElementById("box2");

function addtask(){
    if(text.value === ''){
        alert("You must write something..");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = text.value;
        box.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    text.value = "";
    savedata();
}

box.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem("data2",box.innerHTML);
}

function showtask(){
    box.innerHTML = localStorage.getItem("data2");
}

showtask();