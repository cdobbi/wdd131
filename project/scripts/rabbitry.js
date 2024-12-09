document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("lastModified").textContent = document.lastModified;
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    console.log("DOM fully loaded and parsed");

    const trivia = [
        "Hopping Trivia: The Rhinelander has a distinctive butterfly marking on its nose.",
        "Hopping Trivia: Rhinelanders are rare with about 2,000 in the world.",
        "Hopping Trivia: The Rhinelander is a rare breed of rabbit.",
        "Hopping Trivia: Rhinelanders are medium to large-sized rabbits, weighing between 6.5 to 10 pounds",
        "Hopping Trivia: Rhinelanders are intelligent and trainable.",
        "Hopping Trivia: In order to show a Rhinelander it must have at least 3 spots on the thigh.",
        "Hopping Trivia: The Rhinelander was first bred in the 1920s.",
        "Hopping Trivia: The Rhinelanders originated in Germany.",
        "Hopping Trivia: Rhinelander rabbits require minimal grooming as they only shed twice a year.",
        "Hopping Trivia: They originated in North Rhine-Westphalia, Germany, in the early 1900s.",
        "Hopping Trivia: Rabbit ears move independently by 180 degrees, enabling them to hear from two directions at once.",
        "Hopping Trivia: A rabbit’s sense of smell is even better than their eyesight.",
        "Hopping Trivia: Rabbits can run up to 18 miles per hour.",
        "Hopping Trivia: Rabbit tails are used to distract predators during a chase and to signal danger to other rabbits.",
        "Hopping Trivia: Rabbits have nearly 360° panoramic vision, allowing them to detect predators from almost any direction.",
        "Hopping Trivia: Rhinelanders were created by crossing a Japanese Harlequin and a Checkered Giant.",
        "Hopping Trivia: In the wild, rabbits live in groups called colonies.",
        "Hopping Trivia: Colonies of rabbits live in underground warrens.",
        "Hopping Trivia: Rabbits are herbivores.",
        "Hopping Trivia: Rabbits are crepuscular, meaning they are most active at dawn and dusk.",
        "Hopping Trivia: Rabbits are social animals.",
        "Hopping Trivia: Rabbits communicate through body language.",
        "Hopping Trivia: Rabbits will give you kisses to show affection.",
        "Hopping Trivia: Rabbits are prey animals.",
        "Hopping Trivia: Rabbits have a third eyelid called a nictitating membrane.",
        "Hopping Trivia: Rabbits love to eat apple tree leaves and branches.",
        "Hopping Trivia: Rabbits love to eat dandelion leaves, roses and flowers.",
        "Hopping Trivia: Rabbits love to eat mint leaves & parsley.",
        "Hopping Trivia: Rhinelanders make exceptional emotional support animals.",
        "Hopping Trivia: Rhinelanders are known for their friendly and outgoing personalities.",
        "Hopping Trivia: Rhinelanders are known for their playful and curious nature.",
        "Hopping Trivia: Temperatures above 85 degrees Fahrenheit sterilize bucks.",
        "Hopping Trivia: Rhinelanders have a stripe of color on that extends the length of their back.",
        "Hopping Trivia: The Rhinelander is known for their distinctive coat markings.",
        "Hopping Trivia: A rabbit doe has 2 uteruses",
        "Hopping Trivia: Rabbits have 2 sets of incisors",
        "Hopping Trivia: Rabbits have 28 teeth",
        "Hopping Trivia: Rabbits have a lifespan of 1.6-12 years",
        "Hopping Trivia: Rhinelanders require daily interaction and mental stimulation.",
        "Hopping Trivia: The Marked Rhinelander is the only variety that can be shown competitively.",
        "Hopping Trivia: If the Rhinelander doesn't have hip spots, it is referred to as a 'Charlie' variety.",
    ];

    const randomTrivia = trivia[Math.floor(Math.random() * trivia.length)];
    console.log("Hopping Trivia: ", randomTrivia);
    document.getElementById("random-trivia").textContent = randomTrivia;

    // Hamburger menu functionality
    const menuButton = document.getElementById('menu');
    const navMenu = document.getElementById('nav-menu');

    menuButton.addEventListener('click', function() {
        navMenu.classList.toggle('open');
        menuButton.classList.toggle('open');
    });
});
