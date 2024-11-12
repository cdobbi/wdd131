const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list"); // Updated to match the id in the HTML

function addChapter() {
    const chapter = input.value.trim();

    // Check if the input is not empty
    if (chapter !== "") {
        // Create a new li element
        const li = document.createElement("li"); // Corrected from createdElement to createElement
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


