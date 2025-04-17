// THESE ARE THE ANSWERS FOR THE JAVASCRIPT EXERCISES!!! 
// DO NOT READ IF YOU PLAN TO DO THEM YOURSELF!

// Task 1: Change the Page Title
const title = document.querySelector("h1");
const changeTitleBtn = document.getElementById("changeTitle");

changeTitleBtn.addEventListener("click", function() {
    title.textContent = "New Page Title";
});

// Task 2: Add New Items to the List
const itemList = document.getElementById("itemList");
const addItemBtn = document.getElementById("addItem");

addItemBtn.addEventListener("click", function() {
    let newItem = document.createElement("li");
    newItem.textContent = "New Item";
    
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function() {
        newItem.remove();
    });
    
    newItem.appendChild(deleteBtn);
    itemList.appendChild(newItem);
});

// Task 3: Change Background Color
const changeColorBtn = document.getElementById("changeColor");

changeColorBtn.addEventListener("click", function() {
    document.body.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, 
                                              ${Math.floor(Math.random() * 256)}, 
                                              ${Math.floor(Math.random() * 256)})`;
});

// Task 5: Toggle Visibility of a Section
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "Toggle Section";
document.body.insertBefore(toggleBtn, document.body.firstChild);

const section = document.querySelector("section");

toggleBtn.addEventListener("click", function() {
    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
});

// Task 6: Input Field and Dynamic Text
const inputField = document.createElement("input");
const displayText = document.createElement("p");

document.body.appendChild(inputField);
document.body.appendChild(displayText);

inputField.addEventListener("input", function() {
    displayText.textContent = inputField.value;
});
