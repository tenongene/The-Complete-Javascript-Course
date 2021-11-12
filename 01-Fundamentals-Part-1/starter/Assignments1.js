"use strict";

//VARIABLES
const country = "Cameroon";
const continent = "Africa";
let population = 26000000;

console.log(country, continent, population);

const isIsland = false;
const language = "French";

//DATA TYPES
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//BASIC OPERATORS
console.log(population / 2);
console.log((population += 1));
console.log(population > 6000000);
console.log(population < 33000000);

//TEMPLATE STRING LITERALS
const description = `${country} in in ${continent}, and its ${population} people speak ${language}`;
console.log(description);

//IF/ELSE STATEMENTS

if (population > 33000000) {
  console.log(`${country}'s population is above average.'`);
} else {
  console.log(
    `${country}'s population is ${33000000 - population} below average.'`
  );
}

//TYPE CONVERSION AND COERCION
console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);

//EQUALITY OPERATORS
//let numNeighbors = prompt(`How many neighboring countries does your country have?`);
//if (numNeighbors === 1) {
//   console.log(`Only 1 border!`);
//} else if (numNeighbors > 1) {
//   console.log(`More than 1 border.`);
//} else {
//   console.log(`No borders.`);
//}

//LOGICAL OPERATORS

if (country === "English" && population < 50000000 && isIsland) {
  console.log(`You should live in ${country}!`);
} else {
  console.log(`${country} does not meet your criteria.`);
}

//Falsey Values: 0, '', undefined, null, NaN

//SWITCH STATEMENTS

switch (language) {
  case "Mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "Spanish":
    console.log("2nd place in number of native speakers.");
    break;
  case "English":
    console.log("3rd place.");
    break;
  case "Hindi":
    console.log("Number 4.");
    break;
  case "Arabic":
    console.log("5th most spoken language.");
    break;
  default:
    console.log("Great language too.");
}

//TERNARY OPERATORS

/*population > 33000000
  ? console.log(`${country}'s population is above average'`)
  : console.log(`${country}'s population is above average'`);*/

console.log(
  `${country}'s population is ${
    population > 33000000 ? "above" : "below"
  } average`
);
