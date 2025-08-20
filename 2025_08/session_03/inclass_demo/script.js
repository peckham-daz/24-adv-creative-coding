// Modify element content
document.getElementsByTagName("label")[0].innerHTML = "JoJo, Yifan, and Cindy";
document.getElementById("page-title").innerText = "Welcome to Peckham DAZ Accessible Web Development!";
document.getElementsByTagName("textarea")[0].placeholder = "Add your Week 3 feedback here to help us improve the course!";

// Add event listener
// Change button style once clicked

document.getElementById("reviewForm").addEventListener("submit", function(event) {
  alert("Thanks for your time!");
  document.getElementsByTagName("button")[0].style.backgroundColor = "gray";
  event.preventDefault();
});


// create a new element to display the feedback:
// e.g add a link to the feedback

const link = document.createElement("a");
link.href = "https://peckhamdaz.com/";
link.innerHTML = "Peckham DAZ";
document.body.appendChild(link);


// modify attributes: e.g. change the size of the img
document.querySelector("img").style.width = "100px";

// e.g. update img src

document.getElementsByTagName("img")[0].src = "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F880587673%2F199644235080%2F1%2Foriginal.20241022-140431?h=230&w=460&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C49%2C1440%2C720&s=4b8de2e0db7ae998d807bd53d70ca799";
document.getElementsByTagName("img")[0].style.width = "400px";
