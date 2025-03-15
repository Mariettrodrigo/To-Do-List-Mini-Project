//added ids from html code here
const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
 
//add task function
function addTask(){
    if(inputBox.value === ''){
        alert("Hey Write Something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    //to clear searchbar again
    inputBox.value = "";
    saveData();
}

//to add tasks delete or mark checked
listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);

//to save tasks
function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}

//to open data whenever open
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();