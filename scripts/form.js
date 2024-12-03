document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[name="Feature"]');
    const form = document.querySelector('form');
    const breedSelect = document.getElementById('breed-select');

    // Rabbit Breeds Array
    const rabbitBreeds = [
        {
            id: "rb-" + Math.floor(Math.random() * 10000),
            name: "Rhinelander",
            averagerating: 4.5
        },
        {
            id: "rb-" + Math.floor(Math.random() * 10000),
            name: "Mini Lop",
            averagerating: 4.7
        },
        {
            id: "rb-" + Math.floor(Math.random() * 10000),
            name: "Harlequin",
            averagerating: 3.5
        },
        {
            id: "rb-" + Math.floor(Math.random() * 10000),
            name: "New Zealand",
            averagerating: 3.9
        },
        {
            id: "rb-" + Math.floor(Math.random() * 10000),
            name: "Checkered Giant",
            averagerating: 5.0
        },
        {
            id: "rb-" + Math.floor(Math.random() * 10000),
            name: "Silver Fox",
            averagerating: 4.2
        },
        {
            id: "rb-" + Math.floor(Math.random() * 10000),
            name: "Dutch",
            averagerating: 4.0
        },
        {
            id: "rb-" + Math.floor(Math.random() * 10000),
            name: "Flemish Giant",
            averagerating: 4.8
        },
        {
            id: "rb-" + Math.floor(Math.random() * 10000),
            name: "Lionhead",
            averagerating: 4.3
        },
        {
            id: "rb-" + Math.floor(Math.random() * 10000),
            name: "English Angora",
            averagerating: 4.6
        }
    ];

    // Populate the breed select options
    rabbitBreeds.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.textContent = breed.name;
        breedSelect.appendChild(option);
    });

    form.addEventListener('submit', function(event) {
        let checkedOne = Array.prototype.slice.call(checkboxes).some(x => x.checked);
        if (!checkedOne) {
            event.preventDefault();
            alert('Please check at least one feature.');
        } else {
            // Increment review count in localStorage
            let reviewCount = localStorage.getItem('reviewCount');
            if (!reviewCount) {
                reviewCount = 0;
            }
            reviewCount = parseInt(reviewCount) + 1;
            localStorage.setItem('reviewCount', reviewCount);
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