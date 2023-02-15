//your code here
let addinput = document.getElementById("newTodoInput");
let button = document.getElementById("addTodoBtn");
let ol = document.getElementById("todoList"); 

button.addEventListener("click", () => {
    let li = document.createElement("li");
    li.textContent = addinput.value;
    if(addinput.value== "") return;
    ol.appendChild(li);
    addinput.value = "";
})
/*

function addTodo(){
	if(addinput.value){
	//we need to create li 
	 var li = document.createElement('li');
	
	 li.textContent = addinput.value;
	 ol.appendChild(li);
	 addinput.value ="";
	
	
	}
}
btn.addEventListener('click', addTodo)
*/