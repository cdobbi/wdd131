document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[name="Feature"]');
    const form = document.querySelector('form');

    form.addEventListener('submit',
        function (event) {
        let checkedOne = Array.prototype.slice.call(checkboxes).some(x => x.checked);
        if (!checkedOne) {
            event.preventDefault();
            alert('Please check at least one feature.');
        }
    });

    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }

    const currentYearElement = document.getElementById('currentyear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
});



// JavaScript
// Use JavaScript to populate the Product Name options where the array's name field is used for the select option display and the array's id is used for the value field.
// Copy the following array of product objects into your JavaScript file to use as the data source.

// Product Array
// const products = [
//     {
//       id: "fc-1888",
//       name: "flux capacitor",
//       averagerating: 4.5
//     },
//     {
//       id: "fc-2050",
//       name: "power laces",
//       averagerating: 4.7
//     },
//     {
//       id: "fs-1987",
//       name: "time circuits",
//       averagerating: 3.5
//     },
//     {
//       id: "ac-2000",
//       name: "low voltage reactor",
//       averagerating: 3.9
//     },
//     {
//       id: "jj-1969",
//       name: "warp equalizer",
//       averagerating: 5.0
//     }
//   ];

// Use localStorage to keep track of the number of reviews completed by the user client by adding a counter to the form submission review.html page. Every time that page is loaded successfully upon form submission, add one to the counter.