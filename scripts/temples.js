const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = document.lastModified;

/*JavaScript
Remember that all of your JavaScript references in this class should be to external files.
Support the footer copyright year and date last modified output through a valid JavaScript reference. You already have one or could use the temples.js file.
Apply a responsive hamburger effect to your existing navigation menu using JavaScript.
The hamburger button should only show in the mobile view.
Clicking the hamburger button toggles the navigation menu items from viewable to not viewable.
Use a symbol, such as an "X" to close the hamburger menu.*/