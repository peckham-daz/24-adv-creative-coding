# Peckham Daz - Week 3 Labs
## Exercises
## Exercise 1 - Using Accessibility Tools
<small>Note: you need Google Chrome for this. If you don't have Chrome then work as a group or pair up with someone who has Chrome.</small>
Download the <a href="https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh">Wave google chrome extension</a>. Load a website of your choice and run the Wave extension. Use wave to: evaluate the HTML structure; try turning off the styles; assess the accessibility features of your chosen website; assess the contrast. What does the page do well? Where could it improve? What WACG rating does it have?
## Exercise 2 - Accessible HTML
For the coding part of this lab, you will this code starter!:
- <a href="https://codepen.io/danhearn-the-looper/pen/GRbJXRy">CodePen lab starter</a>
<small>Note: to complete these exercises you might need to refer to the W3C documentation, just as a developer would.</small>
### Exercise 2A
Add 'alt' text to the image in the HTML. Provide a meaningful description.
### Exercise 2B
Replace the div tags that define the page structure with appropriate semantic elements (e.g <header> <nav> <main> <section>...). Use the W3C resources for a reference of HTML tags.
### Exercise 2C
Use proper heading tags. Ensure that the headings follow a logical order.
### Exercise 2D
Replace vague link text with more descriptive text
### Exercise 2E
Add label HTML tags to provide labels for form controls.
### Exercise 2F
Add captions to the video using the <track> HTML tag.
### Exercise 2G
Add an ARIA attribute to the button
## Exercise 3 - Accessible CSS
Navigate to the styles.css file for these exercises.
### Exercise 3A
find the body CSS selector, increase the contrast of the text and background.
### Exercise 3B
Using the stylesheet, link HTML tags to the CSS styles by adding ID and Class attributes to your HTML elements.
### Exercise 3C
Create a new button anywhere in your HTML file. Create a new style for this button using CSS selectors to target the button, and CSS properties to change the styling.
### Excise 3D
Using a :hover state, add additional styling to this button so that it changes when you hover your mouse over it.
## Exercise 3 - Accessible JavaScript
You don't have to complete all of these! Choose 2 or 3 and try to really understand them.
### Exercise 3A: Adding Elements Dynamically
Create a button that, when clicked, adds a new paragraph to the page. The new paragraph should contain placeholder text and be appended to an existing container element.
### Exercise 3B: Removing Elements
Add a button that, when clicked, removes the last paragraph added by the previous button from the container.
### Exercise 3C: Toggling Visibility
Create a button that toggles the visibility of a specific section of the page.
Extra: When the section is visible, the button text should read "Hide Section", and when the section is hidden, the button text should read "Show Section".
### Exercise 3D: Modifying Text Content
Create a button that, when clicked, changes the text content of a specific heading on the page to a new text.
### Exercise 3E: Changing Styles Dynamically
Create a button that, when clicked, changes the background color of a specific div to a different color.
### Exercise 3F: Form Validation
Create a simple form with an input field and a submit button. Add JavaScript that checks if the input field is empty when the form is submitted. If it is empty, display an error message below the input field.
## Optional Challenge!
- Using an array, create a list of menu items for the Peckham Bakery.
- Create a loop that manipulates the dom by adding a menu item UI for each item in your menu array. The UI should have a container, the menu item name as a title, and placeholder text as a description.
hint: remember you will need a container element in your HTML to inject the menu items into!
Happy coding!