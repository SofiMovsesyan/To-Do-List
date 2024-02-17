
let main = document.getElementById("main");
let inputTask = document.getElementById("inputTask");
let addBtn = document.getElementById("addBtn");
let ul = document.getElementById("ul");
let inputValue, li;
addBtn.addEventListener("click", () => {
    inputValue = inputTask.value.trim();
    if(inputValue != "") {
        li = document.createElement("li");
        li.innerHTML = `
        <p class="task">${inputValue}</p>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
        `
        ul.appendChild(li);
    }
    inputTask.value="";
})


ul.addEventListener("click", (e) => {
    
    if(e.target.classList.contains("edit")) {
        let p = e.target.parentElement.querySelector(".task")
        let editBox = prompt("Edit your task here: ", p.textContent)
        p.textContent = editBox;
    }else if(e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    }else {
        event.target.classList.add('checked');

    }
})

