const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
 
function addTask(){
    if(inputBox.value === ''){
        alert("Hey Write Something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
    }

}