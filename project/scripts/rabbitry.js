document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("lastModified").textContent = document.lastModified;
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    console.log("DOM fully loaded and parsed");

    const trivia = [
        "A Bit of Trivia: The Rhinelander has a distinctive butterfly marking on its nose.",
        "A Bit of Trivia: Rhinelanders are rare with about 2,000 in the world.",
        "A Bit of Trivia: The Rhinelander is a rare breed of rabbit.",
        "A Bit of Trivia: Rhinelanders are medium to large-sized rabbits, weighing between 6.5 to 10 pounds",
        "A Bit of Trivia: Rhinelanders are intelligent and trainable.",
        "A Bit of Trivia: In order to show a Rhinelander it must have at least 3 spots on the thigh.",
        "A Bit of Trivia: The Rhinelander was first bred in the 1920s.",
        "A Bit of Trivia: The Rhinelanders originated in Germany.",
        "A Bit of Trivia: Rhinelander rabbits require minimal grooming as they only shed twice a year.",
        "A Bit of Trivia: They originated in North Rhine-Westphalia, Germany, in the early 1900s.",
        "A Bit of Trivia: Rabbit ears can move independently by 180 degrees, enabling them to hear from two directions at once.",
        "A Bit of Trivia: A rabbit’s sense of smell is even better than their eyesight.",
        "A Bit of Trivia: Rabbits can run up to 18 miles per hour.",
        "A Bit of Trivia: Rabbit tails are used to distract predators during a chase and to signal danger to other rabbits.",
        "A Bit of Trivia: Rabbits have nearly 360° panoramic vision, allowing them to detect predators from almost any direction.",
        "A Bit of Trivia: Rhinelanders were created by crossing a Japanese Harlequin and a Checkered Giant.",
        "A Bit of Trivia: In the wild, rabbits live in groups called colonies.",
        "A Bit of Trivia: Rabbits can taste their own poop when eating the vegetables that've been fertilized with their poop.",
        "A Bit of Trivia: Colonies of rabbits live in underground warrens.",
        "A Bit of Trivia: Rabbits are herbivores.",
        "A Bit of Trivia: Rabbits are crepuscular, meaning they are most active at dawn and dusk.",
        "A Bit of Trivia: Rabbits are social animals.",
        "A Bit of Trivia: Rabbits communicate through body language.",
        "A Bit of Trivia: Rabbits will give you kisses to show affection.",
        "A Bit of Trivia: Rabbits are prey animals.",
        "A Bit of Trivia: Rabbits have a third eyelid called a nictitating membrane.",
        "A Bit of Trivia: Rabbits love to eat apple tree leaves and branches.",
        "A Bit of Trivia: Rabbits love to eat dandelion leaves, roses and flowers.",
        "A Bit of Trivia: Rabbits love to eat mint leaves.",
        "A Bit of Trivia: Rabbits love to eat parsley.",
        "A Bit of Trivia: Rhinelanders make exceptional emotional support animals.",
        "A Bit of Trivia: Rhinelanders are known for their friendly and outgoing personalities.",
        "A Bit of Trivia: Rhinelanders are known for their playful and curious nature.",
        "A Bit of Trivia: Temperatures above 85 degrees Fahrenheit sterilize bucks.",
        "A Bit of Trivia: Rhinelanders have a stripe of color on that extends the length of their back.",
        "A Bit of Trivia: The Rhinelander is known for their distinctive coat markings.",
        "A Bit of Trivia: Rabbit doe have 2 uteruses",
        "A Bit of Trivia: Rabbits have 2 sets of incisors",
        "A Bit of Trivia: Rabbits have 28 teeth",
        "A Bit of Trivia: Rabbits have a lifespan of 1.6-12 years",
        "A Bit of Trivia: Rhinelanders require daily interaction and mental stimulation.",
        "A Bit of Trivia: The Marked Rhinelander is the only variety that can be shown competitively.",
        "A Bit of Trivia: If the Rhinelander doesn't have hip spots, it is referred to as a 'Charlie' variety.",
    ];

    const randomTrivia = trivia[Math.floor(Math.random() * trivia.length)];
    console.log("A Bit of Trivia: ", randomTrivia);
    document.getElementById("random-trivia").textContent = randomTrivia;

    // Hamburger menu functionality
    const menuButton = document.getElementById('menu');
    const navMenu = document.getElementById('nav-menu');

    menuButton.addEventListener('click', function() {
        navMenu.classList.toggle('open');
        menuButton.classList.toggle('open');
    });
});
