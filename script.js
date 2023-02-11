//your code here
let addinput = document.getElementById("todoInput");
let button = document.getElementById("addTodoBtn");
let ol = document.getElementById("listofitem"); 

button.addEventListener("click", () => {
    let li = document.createElement("li");
    li.textContent = addinput.value;
    ol.appendChild(li);
    addinput.value = "";
})