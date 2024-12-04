

---

### **Exercise 1: Rock, Paper, Scissors Game**
**Objective**: Build a simple text-based game.  
**Task**:
1. Create a program where the user plays Rock, Paper, Scissors against the computer.
2. The computer randomly selects Rock, Paper, or Scissors.
3. Compare the user’s choice to the computer’s choice and declare the winner.

**Example Code:**
```javascript
let choices = ["Rock", "Paper", "Scissors"];
let userChoice = prompt("Choose Rock, Paper, or Scissors:");
let computerChoice = choices[Math.floor(Math.random() * choices.length)];

console.log("You chose: " + userChoice);
console.log("Computer chose: " + computerChoice);

if (userChoice === computerChoice) {
  console.log("It's a tie!");
} else if (
  (userChoice === "Rock" && computerChoice === "Scissors") ||
  (userChoice === "Paper" && computerChoice === "Rock") ||
  (userChoice === "Scissors" && computerChoice === "Paper")
) {
  console.log("You win!");
} else {
  console.log("You lose!");
}
```

---

### **Exercise 2: Guess the Number**
**Objective**: Create a guessing game.  
**Task**:
1. The computer randomly selects a number between 1 and 10.
2. The user tries to guess the number.
3. Provide feedback if the guess is too high, too low, or correct.

**Example Code:**
```javascript
let randomNumber = Math.floor(Math.random() * 10) + 1;
let guess;

do {
  guess = parseInt(prompt("Guess a number between 1 and 10:"));
  if (guess < randomNumber) {
    console.log("Too low!");
  } else if (guess > randomNumber) {
    console.log("Too high!");
  } else {
    console.log("Correct! You guessed the number!");
  }
} while (guess !== randomNumber);
```

---

### **Exercise 3: Color Guessing Game**
**Objective**: Add some visual fun with colors.  
**Task**:
1. Create a button that changes the background to a random color when clicked.
2. The user guesses the color from a list of options.

**Example Code:**
HTML:
```html
<button id="changeColor">Change Background Color</button>
<input id="colorGuess" placeholder="Guess the color" />
<button id="submitGuess">Submit Guess</button>
<p id="result"></p>
```

JavaScript:
```javascript
let colors = ["red", "blue", "green", "yellow", "purple"];
let randomColor;

document.getElementById("changeColor").addEventListener("click", function() {
  randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});

document.getElementById("submitGuess").addEventListener("click", function() {
  let guess = document.getElementById("colorGuess").value.toLowerCase();
  if (guess === randomColor) {
    document.getElementById("result").innerText = "Correct! The color was " + randomColor + "!";
  } else {
    document.getElementById("result").innerText = "Wrong! Try again.";
  }
});
```

---

### **Exercise 4: Simple Clicker Game**
**Objective**: Create a game that tracks how many times a button is clicked.  
**Task**:
1. Add a button labeled "Click Me!".
2. Each time the button is clicked, update a counter displayed on the page.

**Example Code:**
HTML:
```html
<button id="clickMe">Click Me!</button>
<p>Clicks: <span id="counter">0</span></p>
```

JavaScript:
```javascript
let count = 0;

document.getElementById("clickMe").addEventListener("click", function() {
  count++;
  document.getElementById("counter").innerText = count;
});
```

---

### **Exercise 5: Word Scramble Game**
**Objective**: Create a fun word puzzle game.  
**Task**:
1. Display a scrambled word.
2. Let the user guess the correct word.
3. Check their guess and give feedback.

**Example Code:**
```javascript
let word = "javascript";
let scrambled = word.split("").sort(() => 0.5 - Math.random()).join("");

console.log("Scrambled Word: " + scrambled);

let guess = prompt("Unscramble the word:");

if (guess === word) {
  console.log("Correct! The word is " + word + ".");
} else {
  console.log("Incorrect! Try again.");
}
```

---

### **Exercise 6: Create a Stopwatch**
**Objective**: Build a simple stopwatch app.  
**Task**:
1. Add buttons for Start, Stop, and Reset.
2. Display the elapsed time in seconds.

**Example Code:**
HTML:
```html
<button id="start">Start</button>
<button id="stop">Stop</button>
<button id="reset">Reset</button>
<p>Time: <span id="timer">0</span> seconds</p>
```

JavaScript:
```javascript
let time = 0;
let interval;

document.getElementById("start").addEventListener("click", function() {
  interval = setInterval(function() {
    time++;
    document.getElementById("timer").innerText = time;
  }, 1000);
});

document.getElementById("stop").addEventListener("click", function() {
  clearInterval(interval);
});

document.getElementById("reset").addEventListener("click", function() {
  clearInterval(interval);
  time = 0;
  document.getElementById("timer").innerText = time;
});
```

---

### **Exercise 7: Create a Mad Libs Game**
**Objective**: Build a fill-in-the-blanks story generator.  
**Task**:
1. Prompt the user for a noun, verb, and adjective.
2. Display a funny story using their inputs.

**Example Code:**
```javascript
let noun = prompt("Enter a noun:");
let verb = prompt("Enter a verb:");
let adjective = prompt("Enter an adjective:");

console.log(`Once upon a time, there was a ${adjective} ${noun} who loved to ${verb} all day long.`);
```

---
