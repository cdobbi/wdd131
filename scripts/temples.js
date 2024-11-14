// Update the last modified date
document.getElementById("lastModified").textContent = document.lastModified;

// Update the current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Toggle the navigation menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    hamburger.textContent = navMenu.classList.contains('show') ? 'X' : '☰';
});

// Existing code for adding chapters
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

function addChapter() {
    const chapter = input.value.trim();

    if (chapter !== "") {
        // Create a new li element
        const li = document.createElement("li");
        li.textContent = chapter;

        // Create a delete button for the li element
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.addEventListener("click", function () {
            list.removeChild(li);
            input.focus(); // Set focus back to the input field after deletion
        });

        // Append the delete button to the li element
        li.append(deleteButton);

        // Append the li element to the ul
        list.append(li);

        // Clear the input field and set focus back to it
        input.value = "";
        input.focus();
    }
}

button.addEventListener("click", addChapter);

window.addEventListener("resize", function() {
    console.log("The window has been resized!");
});