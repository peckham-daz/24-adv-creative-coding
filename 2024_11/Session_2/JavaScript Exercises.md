
---

# **JavaScript Exercises**

### **Exercise 1: Variables and Conventions**
**Task**: Create a `script.js` file that declares variables for:
1. Your favorite superhero.
2. The number of pizzas you can eat in one sitting.
3. The best movie you’ve ever seen.

**Example:**
```javascript
let superhero = "Spider-Man";
let pizzasEaten = 3;
let bestMovie = "The Lion King";

console.log("Superhero: " + superhero);
console.log("Pizzas I can eat: " + pizzasEaten);
console.log("Best Movie: " + bestMovie);
```

---

### **Exercise 2: Simple Math Operations**

#### **Exercise 2a: Addition**
**Task**: Calculate the total cost of buying a coffee and a croissant.

**Example:**
```javascript
let coffeePrice = 3.5;
let croissantPrice = 2.5;
console.log("Total cost: $" + (coffeePrice + croissantPrice));
```

#### **Exercise 2b: Subtraction**
**Task**: Calculate how much money you’ll have left after buying a donut.

**Example:**
```javascript
let wallet = 10;
let donutPrice = 1.5;
console.log("Money left: $" + (wallet - donutPrice));
```

#### **Exercise 2c: Multiplication**
**Task**: Calculate the number of ice creams you can buy with your money.

**Example:**
```javascript
let iceCreamPrice = 2;
let totalMoney = 20;
console.log("Ice creams I can buy: " + (totalMoney / iceCreamPrice));
```

#### **Exercise 2d: Division**
**Task**: Divide your candy stash equally among friends.

**Example:**
```javascript
let candies = 24;
let friends = 4;
console.log("Each friend gets: " + (candies / friends) + " candies");
```

---

### **Exercise 3: Conditional Statements**
**Task**: Write code to check if a temperature is suitable for wearing a jacket.

**Example:**
```javascript
let temperature = 15; // degrees Celsius
if (temperature < 20) {
  console.log("It's jacket weather!");
} else {
  console.log("No jacket needed!");
}
```

---

### **Exercise 4: Arrays and Loops**
**Task**: Store a list of your dream travel destinations in an array and log them one by one.

**Example:**
```javascript
let destinations = ["Bali", "Iceland", "Japan", "Italy"];
for (let i = 0; i < destinations.length; i++) {
  console.log("I want to visit: " + destinations[i]);
}
```

---

### **Exercise 5: Basic DOM Manipulation**
**Task**: Create a button that changes the background color of the page when clicked.

**HTML Example:**
```html
<button id="colorButton">Change Background Color</button>
```

**JavaScript Example:**
```javascript
document.getElementById("colorButton").addEventListener("click", function() {
  document.body.style.backgroundColor = "lightcoral";
});
```

---

### **Exercise 6: Basic Form Validation**
**Task**: Create a form where users enter their favorite book and email. Validate that both fields are filled out, and display a message.

**HTML Example:**
```html
<form id="bookForm">
  <input type="text" id="book" placeholder="Favorite Book">
  <input type="email" id="email" placeholder="Email">
  <button type="submit">Submit</button>
  <p id="errorMessage" style="color:red;"></p>
</form>
```

**JavaScript Example:**
```javascript
document.getElementById("bookForm").addEventListener("submit", function(event) {
  event.preventDefault();
  let book = document.getElementById("book").value;
  let email = document.getElementById("email").value;
  let errorMessage = document.getElementById("errorMessage");

  if (!book || !email) {
    errorMessage.innerText = "Please fill out both fields!";
  } else {
    errorMessage.innerText = "";
    alert("Thank you for sharing your favorite book!");
  }
});
```

---

### **Exercise 7: Creating a To-Do List**
**Task**: Build a fun to-do list app that includes tasks like "Feed the dragon" or "Save the world."

**HTML Example:**
```html
<div>
  <input type="text" id="taskInput" placeholder="Add a task">
  <button id="addTaskButton">Add Task</button>
  <ul id="taskList"></ul>
</div>
```

**JavaScript Example:**
```javascript
document.getElementById("addTaskButton").addEventListener("click", function() {
  let taskInput = document.getElementById("taskInput");
  let taskList = document.getElementById("taskList");

  if (taskInput.value) {
    let li = document.createElement("li");
    li.innerText = taskInput.value;

    // Add 'Complete' Button
    let completeButton = document.createElement("button");
    completeButton.innerText = "Complete";
    completeButton.addEventListener("click", function() {
      li.style.textDecoration = "line-through";
    });

    // Add 'Remove' Button
    let removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.addEventListener("click", function() {
      taskList.removeChild(li);
    });

    li.appendChild(completeButton);
    li.appendChild(removeButton);
    taskList.appendChild(li);
    taskInput.value = ""; // Clear input field
  }
});
```

--- 

