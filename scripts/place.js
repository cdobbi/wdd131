document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById('currentyear').textContent = currentYear;
    document.getElementById('lastModified').textContent = lastModified;

    const temperature = 12; // °C
    const windSpeed = 5; // km/h
    const conditions = "Rainy"; // Fixed condition

    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById('windChill').textContent = windChill;
    document.getElementById('currentTemp').textContent = temperature;
    document.getElementById('WindSpeed').textContent = windSpeed;
    document.getElementById('Conditions').textContent = conditions;
});

function calculateWindChill(temp, speed) {
    if (temp <= 10 && speed > 4.8) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(2) + ' °C';
    } else {
        return 'N/A';
    }
}