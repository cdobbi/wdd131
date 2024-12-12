document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');

    // Define elements first
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.querySelector('nav ul');

    // Debugging logs
    console.log('Hamburger Menu:', hamburgerMenu);
    console.log('Nav Menu:', navMenu);

    // Add event listener if elements exist
    if (hamburgerMenu && navMenu) {
        hamburgerMenu.addEventListener('click', function () {
            navMenu.classList.toggle('show');
            hamburgerMenu.classList.toggle('active');
            const isActive = hamburgerMenu.classList.contains('active');
            hamburgerMenu.setAttribute('aria-expanded', isActive);
            console.log('Hamburger menu clicked. Classes toggled.');
        });
    } else {
        console.error('Hamburger menu or nav menu not found');
    }
    const trivia = [
        'Hopping Trivia: The Rhinelander has a distinctive butterfly marking on its nose.',
        'Hopping Trivia: The Rhinelander is a rare breed of rabbit.',
        'Hopping Trivia: Rhinelanders weigh between 6.5 to 10 pounds',
        'Hopping Trivia: Rhinelanders are intelligent and trainable.',
        'Hopping Trivia: The Rhinelanders originated in Germany.',
        'Hopping Trivia: Rabbit ears move independently by 180 degrees, enabling them to hear from two directions at once.',
        'Hopping Trivia: A rabbits sense of smell is even better than their eyesight.',
        'Hopping Trivia: Rabbits can run up to 18 miles per hour.',
        'Hopping Trivia: Rabbit tails are used to distract predators during a chase and to signal danger to other rabbits.',
        'Hopping Trivia: Rabbits have nearly 360° panoramic vision, allowing them to detect predators from almost any direction.',
        'Hopping Trivia: Rhinelanders were created by crossing a Japanese Harlequin and a Checkered Giant.',
        'Hopping Trivia: Rabbits are herbivores.',
        'Hopping Trivia: Rabbits are crepuscular, meaning they are most active at dawn and dusk.',
        'Hopping Trivia: Rabbits are social animals.',
        'Hopping Trivia: Rabbits communicate through body language.',
        'Hopping Trivia: Rabbits will give you kisses to show affection.',
        'Hopping Trivia: Rabbits are prey animals.',
        'Hopping Trivia: Rabbits have a third eyelid called a nictitating membrane.',
        'Hopping Trivia: Rabbits love to eat dandelion leaves, roses and flowers.',
        'Hopping Trivia: Rhinelanders are known for their friendly and outgoing personalities.',
        'Hopping Trivia: Rhinelanders are known for their playful and curious nature.',
        'Hopping Trivia: Temperatures above 85 degrees Fahrenheit sterilize bucks.',
        'Hopping Trivia: The Rhinelander is known for their distinctive coat markings.',
        'Hopping Trivia: A rabbit doe has 2 uteruses',
        'Hopping Trivia: Rabbits have 2 sets of incisors',
        'Hopping Trivia: Rabbits have 28 teeth',
        'Hopping Trivia: Rabbits have a lifespan of 1.6-12 years',
        'Hopping Trivia: Rhinelanders require daily interaction and mental stimulation.',
    ];
    const randomTrivia = trivia[Math.floor(Math.random() * trivia.length)];
    console.log('Hopping Trivia: ', randomTrivia);
    document.getElementById('random-trivia').textContent = randomTrivia;
    document.getElementById('lastModified').textContent = document.lastModified;
    document.getElementById('currentyear').textContent = new Date().getFullYear();

    // Form submission functionality
    if (window.location.pathname.includes('contact-us.html')) {
        const contactForm = document.getElementById('contactForm');
        let isSubmitting = false;

        console.log('Attaching form submit event listener');

        if (contactForm) {
            contactForm.addEventListener('submit', function (event) {
                event.preventDefault();

                if (isSubmitting) return;
                isSubmitting = true;

                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const message = document.getElementById('message').value;

                // Store data locally
                const formData = {
                    name: name,
                    email: email,
                    message: message,
                };
                localStorage.setItem('contactFormData', JSON.stringify(formData));

                // Debugging logs
                console.log('Form submitted');
                console.log('Name: ', name);
                console.log('Email: ', email);
                console.log('Message: ', message);

                // Display the thank you message
                document.getElementById('submittedData').innerHTML = `<h2>Thank you for saying hello. I've received your information and will get back to you shortly. Have a hopping day!</h2>`;
                document.getElementById('submittedData').style.display = 'block';

                contactForm.reset();
                isSubmitting = false;
                const storedData = JSON.parse(localStorage.getItem('contactFormData'));
                if (storedData) {
                    console.log('Stored Form Data:', storedData);
                    // Displayed in the DOM //
                }
            });
        } else {
            console.error('Contact form not found');
        }
    }
});