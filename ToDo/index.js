const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert('You must write something!');
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;//adding the text
        listContainer.appendChild(li);// display the li text
        // for adding the cross icon after the text in list
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";//cross icon code
        li.appendChild(span);
    }
    inputBox.value = "";//so that after the adding text the input field must empty
    saveData();// so that added tast store in it
}

// script so that add or cross function will excute
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
         saveData();//save when we add
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); 
         saveData();//save dta when we remove
    }
}, false)

// when we refresh data not deleted or refresh // pree define h ye
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();// without its calling data never show
