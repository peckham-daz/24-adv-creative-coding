# Lab Tasks: DOM Manipulation

## Task 1: Change the Page Title
- Select the `<h1>` element using JavaScript.
- Add an event listener to the "Change Title" button.
- When clicked, update the `<h1>` text to something new.

### Example:
```javascript
const title = document.querySelector("h1");
const changeTitleBtn = document.getElementById("changeTitle");

changeTitleBtn.addEventListener("click", function() {
    title.textContent = "New Page Title";
});
```

## Task 2: Add New Items to the List
- Select the `<ul>` element with `id="itemList"`.
- Add an event listener to the "Add Item" button.
- When clicked, create a new `<li>` and append it to the list.

### Example:
```javascript
const itemList = document.getElementById("itemList");
const addItemBtn = document.getElementById("addItem");

addItemBtn.addEventListener("click", function() {
    let newItem = document.createElement("li");
    newItem.textContent = "New Item";
    itemList.appendChild(newItem);
});
```

## Task 3: Change Background Color
- Select the "Change Background" button.
- Add an event listener that changes the `<body>` background color when clicked.
- Use `Math.random()` to generate a random color.

### Example:
```javascript
const changeColorBtn = document.getElementById("changeColor");

changeColorBtn.addEventListener("click", function() {
    document.body.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, 
                                              ${Math.floor(Math.random() * 256)}, 
                                              ${Math.floor(Math.random() * 256)})`;
});
```

## Task 4: Remove an Item from the List
- Modify the "Add Item" functionality to include a delete button for each new item.
- When clicked, the item should be removed from the list.

### Example:
```javascript
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
```

## Task 5: Toggle Visibility of a Section
- Create a button that hides or shows a section when clicked.
- Use `display: none;` and `block` styles.

### Example:
```javascript
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
```

## Task 6: Input Field and Dynamic Text
- Add an `<input>` field and a `<p>` below it.
- As the user types in the input, update the `<p>` dynamically to display the entered text.

### Example:
```javascript
const inputField = document.createElement("input");
const displayText = document.createElement("p");

document.body.appendChild(inputField);
document.body.appendChild(displayText);

inputField.addEventListener("input", function() {
    displayText.textContent = inputField.value;
});
```
