// EXAMPLE CODE FOR DOM MANIPULATION EXERCISE!! 
// DO NOT READ IF YOU PLAN TO DO IT

// Select all interactive elements
const interactiveElements = document.querySelectorAll('button, a, input');

// Ensure all elements can be focused
interactiveElements.forEach(element => {
    element.setAttribute('tabindex', '0'); // Ensure elements are focusable if not already
});

// Apply CSS styles when an element is focused
document.addEventListener("keydown", function(event) {
    if (event.key === "Tab") {
        setTimeout(() => {
            const focusedElement = document.activeElement;
            if (focusedElement.matches('button, a, input')) {
                focusedElement.style.outline = "3px solid blue"; // Add a focus outline
            }
        }, 10);
    }
});

// Remove the focus outline when clicking outside
document.addEventListener("click", function() {
    interactiveElements.forEach(element => {
        element.style.outline = "none"; // Remove focus outline when not using Tab navigation
    });
});
  