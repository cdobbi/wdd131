document.querySelector(".menu").addEventListener("click", function() {
    document.querySelector(".nav-menu").classList.toggle("show");
    this.classList.toggle("open"); 
});

document.getElementById("lastModified").textContent = document.lastModified;
document.getElementById("currentyear").textContent = new Date().getFullYear();

window.addEventListener("resize", function() {
    console.log("The window has been resized!");
});

window.addEventListener("resize", function() {
    if (window.innerWidth <= 937) {
        document.querySelector(".menu").style.display = "block";
    } else {
        document.querySelector(".menu").style.display = "none";
        document.querySelector(".nav-menu").classList.remove("show");
        document.querySelector(".menu").classList.remove("open");
    }
});

if (window.innerWidth <= 937) {
    document.querySelector(".menu").style.display = "block";
} else {
    document.querySelector(".menu").style.display = "none";
}


/*JavaScript
Remember that all of your JavaScript references in this class should be to external files.
Support the footer copyright year and date last modified output through a valid JavaScript reference. You already have one or could use the temples.js file.
Apply a responsive hamburger effect to your existing navigation menu using JavaScript.
The hamburger button should only show in the mobile view.
Clicking the hamburger button toggles the navigation menu items from viewable to not viewable.
Use a symbol, such as an "X" to close the hamburger menu.*/


