// loops.js
myInfo = {
    name: "Christi",
    photo: "images/phot.jpg",
    favoriteFood: ["Salad, Chips and Salsa, Tikka Masala, Baked Potato"],
    favoriteColor: ["orange, green, and blue"],
    hobbies: ["Breeding and showing rare rabbits, gardening, learning to code, playing with kids and grandkids."],
    placesLived: [
        {
            place: "Salt Lake City, Utah",
            length: "37 years"
        },
        {
            place: "Chicago, Illinois",
            length: "5 years"
        },
        {
            place: "Payson, Utah",
            length: "10 years",
        },
    ],
};
const foodsElement = document.querySelector('#favorite-foods');
const placesElement = document.querySelector('#places-lived');
function generateListMarkup(list, templateCallback) {
    const htmlList = list.map(templateCallback);
    return htmlListjoin("");
}
function foodsTemplate(food) {
    return `<li>${food}</li>`;
}
function placesTemplate(place) {
    return `<li>${place.place}</dt><dd>${place.length}</dd></li>`;
}
foodsElement.innerHTML = generateListMarkup(myInfo.favoriteFoods, foodsTemplate);

// with .forEach
// const foodsElement = document.querySelector('#favorite-foods');
// function createandAppendFoodItem(food) {
//   let favoriteFood = document.createElement('li');
//   favoriteFood.textContent = food;
//   foodsElement.appendChild(favoriteFood);
// }
// myInfo.favoriteFoods.forEach(createAndAppendFoodItem);


// // with .map
//   const foodsElement = document.querySelector('#favorite-foods');
//   function mapFoodItem(food) {
//     let favoriteFood = document.createElement('li');
//     favoriteFood.textContent = food;
//     return favoriteFood;
//   }
  // this function could also be written this way using a template literal:
//   function mapFoodItemSmall(food) {
//     return `<li>${food}</li>`;
//   }
//   const foodListElements = myInfo.favoriteFoods.map(mapFoodItem);
//   // we need to flatten the array of strings into one big string. .join does this.
// foodsElement.innerHTML = foodListElements.join('');
  
// Another way that we could implement the map version of our code above would be with an arrow function. Our code could be written like this:

// // The map example could be simplified as below:
// const foodsElement = document.querySelector("#favorite-foods");
// const foodListElements = myInfo.favoriteFoods.map((food) => `<li>${food}</li>`);
// // we need to flatten the array of strings into one big string. .join does this.
// foodsElement.innerHTML = foodListElements.join("");

// In fact that example could be simplified even further:

// // OR we could in fact simplify this down to one line!
document.querySelector("#favorite-foods").innerHTML = myInfo.favoriteFoods
    .map((food) => `<li>${food}</li>`)    
    .join("");


//       // for loop
//   for (let i = 0; i < studentReport.length; i++) {
//     if (studentReport[i] < LIMIT) {
//       console.log(studentReport[i]);
//     }
//   }

//   // while loop
//   let i = 0;
//   while (i < studentReport.length) {
//     if (studentReport[i] < LIMIT) {
//       console.log(studentReport[i]);
//     }
//     i++;
//   }

//   // forEach loop
//   studentReport.forEach(function (item) {
//     if (item < LIMIT) {
//       console.log(item);
//     }
//   });

//   // for...in loop
//   for (let i in studentReport) {
//     if (studentReport[i] < LIMIT) {
//       console.log(studentReport[i]);
//     }
//   }
  
    