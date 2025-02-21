# JavaScript Exercises - ANSWERS!!

## Exercise 1: Variables and Conventions
**Task**: Create a `script.js` file that declares variables for:
1. Your favorite superhero.
2. The number of pizzas you can eat in one sitting.
3. The best movie you’ve ever seen.

### Example
```javascript
let superhero = "Spider-Man";
let pizzasEaten = 3;
let bestMovie = "The Lion King";

console.log("Superhero: " + superhero);
console.log("Pizzas I can eat: " + pizzasEaten);
console.log("Best Movie: " + bestMovie);
```

---

## Exercise 2: Simple Math Operations

### Exercise 2a: Addition
**Task**: Calculate the total cost of buying a coffee and a croissant.

### Example
```javascript
let coffeePrice = 3.5;
let croissantPrice = 2.5;
console.log("Total cost: £" + (coffeePrice + croissantPrice));
```

### Exercise 2b: Subtraction
**Task**: Calculate how much money you’ll have left after buying a donut.

### Example
```javascript
let wallet = 10;
let donutPrice = 1.5;
console.log("Money left: £" + (wallet - donutPrice));
```

### Exercise 2c: Multiplication
**Task**: Calculate the number of ice creams you can buy with your money.

### Example
```javascript
let iceCreamPrice = 2;
let totalMoney = 20;
console.log("Ice creams I can buy: " + (totalMoney / iceCreamPrice));
```

### Exercise 2d: Division
**Task**: Divide your candy stash equally among friends.

### Example
```javascript
let candies = 24;
let friends = 4;
console.log("Each friend gets: " + (candies / friends) + " candies");
```

---

## Exercise 3: Conditional Statements
**Task**: Write code to check if a temperature is suitable for wearing a jacket.

### Example
```javascript
let temperature = 15; // degrees Celsius
if (temperature < 20) {
  console.log("It's jacket weather!");
} else {
  console.log("No jacket needed!");
}
```

---

## Exercise 4: Arrays and Loops
**Task**: Store a list of your dream travel destinations in an array and log them one by one.

### Example
```javascript
let destinations = ["Bali", "Iceland", "Japan", "Italy"];
for (let i = 0; i < destinations.length; i++) {
  console.log("I want to visit: " + destinations[i]);
}
```

---

## Exercise 5: Looping with Conditions
**Task**: Count from 1 to 20 and print "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both.

### Example
```javascript
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
```

---

## Exercise 6: Number Classification
**Task**: Declare a variable with a number and check if it’s even or odd.

### Example
```javascript
let number = 42;
if (number % 2 === 0) {
  console.log(number + " is even");
} else {
  console.log(number + " is odd");
}
```

---

## Exercise 7: Number Checker Function
**Task**: Create a function `numberChecker` that takes a number as input and prints whether it is even or odd.

### Example
```javascript
function numberChecker(num) {
  if (num % 2 === 0) {
    console.log(num + " is even");
  } else {
    console.log(num + " is odd");
  }
}

numberChecker(10);
numberChecker(7);
```

---

## Exercise 8: Random Number Guessing Game
**Task**: Generate a random number between 1 and 10 and let the user guess it.

### Example
```javascript
let randomNumber = Math.floor(Math.random() * 10) + 1;
let guess = 5; // Change this to test different guesses

if (guess === randomNumber) {
  console.log("Correct! The number was " + randomNumber);
} else {
  console.log("Wrong! The number was " + randomNumber);
}
```

---

## Exercise 9: Function with Multiple Parameters
**Task**: Create a function that calculates the area of a rectangle given width and height.

### Example
```javascript
function calculateArea(width, height) {
  return width * height;
}

console.log("Area: " + calculateArea(5, 10));
```

---

## Exercise 10: Object Basics
**Task**: Create an object representing a person with name, age, and hobby properties, then log them.

### Example
```javascript
let person = {
  name: "Alice",
  age: 25,
  hobby: "painting"
};

console.log("Name: " + person.name);
console.log("Age: " + person.age);
console.log("Hobby: " + person.hobby);
```

---

## Challenge Exercises

### Challenge 1: Shopping Cart Total
**Task**: Create an array of item prices and use a loop to calculate the total cost.

### Example
```javascript
let prices = [5.99, 12.49, 3.50, 7.99];
let total = 0;
for (let price of prices) {
  total += price;
}
console.log("Total cost: £" + total.toFixed(2));
```

### Challenge 2: Guessing Game with Hints
**Task**: Modify the random number guessing game to give hints if the guess is too high or too low.

### Example
```javascript
let targetNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = 7;

if (userGuess === targetNumber) {
  console.log("Correct! The number was " + targetNumber);
} else if (userGuess < targetNumber) {
  console.log("Too low! Try again.");
} else {
  console.log("Too high! Try again.");
}
```

These exercises build a strong foundation in JavaScript basics using only the console.
