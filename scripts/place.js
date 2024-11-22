document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById('currentyear').textContent = currentYear;
    document.getElementById('lastModified').textContent = lastModified;

    const temperature = 12; // °C
    const windSpeed = 5; // km/h
    const conditions = "Rainy"; // Example condition

    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById('WindChill').textContent = windChill;
    document.getElementById('currentTemp').textContent = temperature;
    document.getElementById('WindSpeed').textContent = windSpeed;
    document.getElementById('Conditions').textContent = conditions;

    updateWeatherIcon(conditions);
});

function calculateWindChill(temp, speed) {
    if (temp <= 10 && speed > 4.8) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(2) + ' °C';
    } else {
        return 'N/A';
    }
}

function updateWeatherIcon(conditions) {
    const weatherIcon = document.getElementById('WeatherIcon');
    let svgContent;

    switch (conditions.toLowerCase()) {
        case 'sunny':
            svgContent = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="24" height="24">
                    <circle cx="32" cy="32" r="10" fill="#FFD700"/>
                    <line x1="32" y1="2" x2="32" y2="12" stroke="#FFD700" stroke-width="2"/>
                    <line x1="32" y1="52" x2="32" y2="62" stroke="#FFD700" stroke-width="2"/>
                    <line x1="2" y1="32" x2="12" y2="32" stroke="#FFD700" stroke-width="2"/>
                    <line x1="52" y1="32" x2="62" y2="32" stroke="#FFD700" stroke-width="2"/>
                    <line x1="10.93" y1="10.93" x2="17.07" y2="17.07" stroke="#FFD700" stroke-width="2"/>
                    <line x1="46.93" y1="46.93" x2="53.07" y2="53.07" stroke="#FFD700" stroke-width="2"/>
                    <line x1="10.93" y1="53.07" x2="17.07" y2="46.93" stroke="#FFD700" stroke-width="2"/>
                    <line x1="46.93" y1="17.07" x2="53.07" y2="10.93" stroke="#FFD700" stroke-width="2"/>
                </svg>`;
            break;
        case 'rainy':
            svgContent = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="24" height="24">
                    <circle cx="32" cy="32" r="10" fill="#00BFFF"/>
                    <line x1="32" y1="2" x2="32" y2="12" stroke="#00BFFF" stroke-width="2"/>
                    <line x1="32" y1="52" x2="32" y2="62" stroke="#00BFFF" stroke-width="2"/>
                    <line x1="2" y1="32" x2="12" y2="32" stroke="#00BFFF" stroke-width="2"/>
                    <line x1="52" y1="32" x2="62" y2="32" stroke="#00BFFF" stroke-width="2"/>
                    <line x1="10.93" y1="10.93" x2="17.07" y2="17.07" stroke="#00BFFF" stroke-width="2"/>
                    <line x1="46.93" y1="46.93" x2="53.07" y2="53.07" stroke="#00BFFF" stroke-width="2"/>
                    <line x1="10.93" y1="53.07" x2="17.07" y2="46.93" stroke="#00BFFF" stroke-width="2"/>
                    <line x1="46.93" y1="17.07" x2="53.07" y2="10.93" stroke="#00BFFF" stroke-width="2"/>
                </svg>`;
            break;
        // Add more cases for different weather conditions
        default:
            svgContent = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="24" height="24">
                    <circle cx="32" cy="32" r="10" fill="#FFD700"/>
                    <line x1="32" y1="2" x2="32" y2="12" stroke="#FFD700" stroke-width="2"/>
                    <line x1="32" y1="52" x2="32" y2="62" stroke="#FFD700" stroke-width="2"/>
                    <line x1="2" y1="32" x2="12" y2="32" stroke="#FFD700" stroke-width="2"/>
                    <line x1="52" y1="32" x2="62" y2="32" stroke="#FFD700" stroke-width="2"/>
                    <line x1="10.93" y1="10.93" x2="17.07" y2="17.07" stroke="#FFD700" stroke-width="2"/>
                    <line x1="46.93" y1="46.93" x2="53.07" y2="53.07" stroke="#FFD700" stroke-width="2"/>
                    <line x1="10.93" y1="53.07" x2="17.07" y2="46.93" stroke="#FFD700" stroke-width="2"/>
                    <line x1="46.93" y1="17.07" x2="53.07" y2="10.93" stroke="#FFD700" stroke-width="2"/>
                </svg>`;
            break;
    }

    weatherIcon.innerHTML = svgContent;
}

/*JavaScript
The footer of the page must include the current year and the date the document was last modified just like the other assignments. 
In your JavaScript file, provide the code to support the following requirements:
Use JavaScript to display the windchill factor in the "Weather" section of the page as shown in the examples. The windchill factor should be calculated and displayed when the page loads.
At this point in the course, go ahead and define variables that use static values for the temperature and wind speed, matching the static, displayed values you have in your weather section content.

Write a function named "calculateWindChill" that returns the windchill factor when passed the appropriate arguments (temperature and wind speed). The function should use one line of code that returns the result of the calculation of the wind. Of course, your formula should be based upon the location's preference of units (°C or °F).
Using AI to help determine this formula might be a good approach.

Do not call the calculateWindChill function unless the conditions are met which are as follows:
Viable Wind Chill Calculations
Metric	Imperial (English)
Temperature	<= 10 °C	<= 50 °F
Wind speed	> 4.8 km/h	> 3 mph
If the conditions are not met, then display "N/A", which means not applicable.
Of course, your code is using static inputs, nonetheless, your code should have this provision coded in preparation for dynamic, real-time inputs. */