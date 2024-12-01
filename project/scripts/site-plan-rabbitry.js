document.getElementById("lastModified").textContent = document.lastModified;

document.getElementById("currentyear").textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");

    const facts = [
        "RANDOM FACT: The Rhinelander has a distinctive butterfly marking on it's nose.",
        "RANDOM FACT: Rhinelanders are rare with about 2,000 in the world.",
        "RANDOM FACT: The Rhinelander is a rare breed of rabbit.",
        "Random Fact: Rhinelanders are medium to large-sized rabbits, weighing between 6.5 to 10 pounds",
        "RANDOM FACT: Rhinelanders are intelligent and trainable.",
        "RANDOM FACT: In order to show a Rhinelander it must have at least 3 spots on the thigh.",
        "RANDOM FACT: The Rhinelander was first bred in the 1920s.",
        "RANDOM FACT: The Rhinelanders originated in Germany.",
        "RANDOM FACT: Rhinelander rabbits require minimal grooming as they only shed twice a year.",
        "RANDOM FACT: They originated in North Rhine-Westphalia, Germany, in the early 1900s.",
        "RANDOM FACT: Rabbit ears can move independently by 180 degrees, enabling them to hear from two directions at once.",
        "RANDOM FACT: A rabbit’s sense of smell is even better than their eyesight.",
        "RANDOM FACTS: Rabbits can run up to 18 miles per hour.",
        "RANDOM FACT: Rabbit tails are used to distract predators during a chase and to signal danger to other rabbits.",
        "RANDOM FACT: Rabbits have nearly 360° panoramic vision, allowing them to detect predators from almost any direction.",
        "RANDOM FACT: Rhinelanders were created by crossing a Japanese Harlequin and a Checkered Giant.",
        "RANDOM FACT: In the wild, rabbits live in groups called colonies.",
        "RANDOM FACT: Rabbits can taste their own poop when eating the vegetables that've been fertilized with their poop.",
        "RANDOM FACT: Colonies of rabbits live in underground warrens.",
        "RANDOM FACT: Rabbits are herbivores.",
        "RANDOM FACT: Rabbits are crepuscular, meaning they are most active at dawn and dusk.",
        "RANDOM FACT: Rabbits are social animals.",
        "RANDOM FACT: Rabbits communicate through body language.",
        "RANDOM FACT: Rabbits will give you kisses to show affection.",
        "RANDOM FACT: Rabbits are prey animals.",
        "RANDOM FACT: Rabbits have a third eyelid called a nictitating membrane.",
        "RANDOM FACT: Rabbits love to eat apple tree leaves and branches.",
        "RANDOM FACT: Rabbits love to eat dandelion leaves, roses and flowers.",
        "RANDOM FACT: Rabbits love to eat mint leaves.",
        "RANDOM FACT: Rabbits love to eat parsley.",
        "RANDOM FACT: Rhinelanders make exceptional emotional support animals.",
        "RANDOM FACT: Rhinelanders are known for their friendly and outgoing personalities.",
        "RANDOM FACT: Rhinelanders are known for their playful and curious nature.",
        "RANDOM FACT: Temperatures above 85 degrees Fahrenheit sterilize bucks.",
        "RANDOM FACT: Rhinelanders have a stripe of color on that extends the length of their back.",
        "RANDOM FACT: The Rhinelander is known for their distinctive coat markings.",
        "RANDOM Fact: Rabbit doe have 2 uteruses",
        "RANDOM FACT: Rabbits have 2 sets of incisors",
        "RANDOM FACT: Rabbits have 28 teeth",
        "RANDOM FACT: Rabbits have a lifespan of 1.6-12 years",
        "RANDOM FACT: Rhinelanders require daily interaction and mental stimulation.",
        "RANDOM FACT: The Marked Rhinelander is the only variety that can be shown competitively.",
        "RANDOM FACT: If the Rhinelander doesn't have hip spots, it is referred to as a 'Charlie' variety.",
    ];

    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    console.log("Random fact: ", randomFact);
    document.getElementById("random-fact").textContent = randomFact;
});