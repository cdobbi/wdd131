

/*JavaScript
The footer of the page must include the current year and the date the document was last modified just like the other assignments. You can copy that code into this page and either use the existing JavaScript file or use your page specific JavaScript file to support this page's footer.
In your JavaScript file, provide the code to support the following requirements:
Use JavaScript to display the windchill factor in the "Weather" section of the page as shown in the examples. The windchill factor should be calculated and displayed when the page loads.
At this point in the course, go ahead and define variables that use static values for the temperature and wind speed, matching the static, displayed values you have in your weather section content.
The next course will cover how to use third-party APIs to get real-time weather data.

Write a function named "calculateWindChill" that returns the windchill factor when passed the appropriate arguments (temperature and wind speed). The function should use one line of code that returns the result of the calculation of the wind. Of course, your formula should be based upon the location's preference of units (°C or °F).
Using AI to help determine this formula might be a good approach.

Do not call the calculateWindChill function unless the conditions are met which are as follows:
Viable Wind Chill Calculations
Metric	Imperial (English)
Temperature	<= 10 °C	<= 50 °F
Wind speed	> 4.8 km/h	> 3 mph
If the conditions are not met, then display "N/A", which means not applicable.
Of course, your code is using static inputs, nonetheless, your code should have this provision coded in preparation for dynamic, real-time inputs. */