
document.getElementById("lastModified").textContent = document.lastModified;

document.getElementById("year").textContent = new Date().getFullYear(); 

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    hamburger.textContent = navMenu.classList.contains('show') ? 'X' : '☰';
});

const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

function addChapter() {
    const chapter = input.value.trim();

    if (chapter !== "") {
  
        const li = document.createElement("li");
        li.textContent = chapter;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.addEventListener("click", function () {
            list.removeChild(li);
            input.focus(); // 
        });

        li.append(deleteButton);

        list.append(li);

        input.value = "";
        input.focus();
    }
}

button.addEventListener("click", addChapter);

window.addEventListener("resize", function() {
    console.log("The window has been resized!");
});

