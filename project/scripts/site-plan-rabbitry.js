document.getElementById("lastModified").textContent = document.lastModified;

document.getElementById("currentyear").textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function() {
    const facts = [
        "Did you know that Rhinelanders originated in Germany?",
        "Rhinelander rabbits are known for their distinctive coat markings.",
        "Rhinelanders are a rare breed and are highly sought after for their unique appearance.",
        "Rhinelander rabbits are social and intelligent, making them great pets.",
        "Rhinelanders require daily interaction and mental stimulation."
    ];

    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById("random-fact").textContent = randomFact;
});