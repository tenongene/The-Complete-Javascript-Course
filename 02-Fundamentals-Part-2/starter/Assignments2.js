"use strict";

//FUNCTIONS

let describeCountry = function (country, population, capitalCity) {
  console.log(
    `${country} has ${population} people and its capital city is ${capitalCity}.`
  );
};

describeCountry("USA", 330000000, "Washington");
describeCountry("Cameroon", 26000000, "Yaounde");
describeCountry("Finland", 6000000, "Helsinki");

//DECLARATIONS VS EXPRESSIONS

function percentageOfWorld1(population) {
  let pct = (population / 7900000000) * 100;
  return pct.toFixed(2);
}

let percentageofWorld2 = function (population) {
  return (population / 7900000000) * 100;
};

let popUSA = percentageOfWorld1(330000000);
let popCameroon = percentageOfWorld1(26000000);
let popFinland = percentageOfWorld1(6000000);

console.log(popUSA, popCameroon, popFinland);

//ARROW FUNCTIONS

let percentageOfWorld3 = (population) => (population / 7900000000) * 100;

//FUNCTIONS CALLING FUNCTIONS

let describePopulation = function (population, country) {
  console.log(
    `${country} has ${population} people, which is about ${percentageOfWorld1(
      population
    )}% of the world.`
  );
};

describePopulation(330000000, "USA");
describePopulation(26000000, "Cameroon");
describePopulation(6000000, "Finland");

// ARRAYS

let populations = [330000000, 26000000, 6000000, 38000000];

console.log(populations.length === 4);

let percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

//ARRAY OPERATIONS_TAB

let neighbors = ["Mexico", "Canada"];
neighbors.push("Utopia");
neighbors.pop("Utopia");
!neighbors.includes("Germany")
  ? console.log("Probably not a central European Country")
  : null;

console.log(neighbors.indexOf("Canada"));

neighbors[1] = "Hawaii";
console.log(neighbors);

//OBJECTS

let myCountry = {
  country: "USA",
  capital: "Washington",
  language: "English",
  population: 330000000,
  neighbors: ["Mexico", "Canada"],
  describe: function (country, capital, language, population, neighbors) {
    console.log(
      `${this.country} has ${this.population} ${this.language} speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}.`
    );
  },
  checkIsland: function (isIsland) {
    console.log(this.neighbors.length === 0 ? true : false);
  },
};

//DOT NOTATION

console.log(
  `${myCountry.country} has ${myCountry.population} ${myCountry.language} speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}.`
);

myCountry.population + 2000000;
myCountry["population"] - 2000000;

console.log(myCountry.population + 2000000);
console.log(myCountry["population"] - 2000000);

//METHODS

myCountry.describe();
myCountry.checkIsland();

//ITERATION FOR LOOP

for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting...`);
}

//LOOPING ARRAYS, BREAK, CONTINUE

let percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);

//LOOPING BACKWARDS  AND LOOPS IN LOOPS

let listOfNeighbors = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbors[0].length; i++) {
  console.log(`Neighbor: ${listOfNeighbors[0][i]}`);

  for (let i = 0; i < listOfNeighbors[1].length; i++) {
    console.log(`Neighbor: ${listOfNeighbors[1][i]}`);

    for (let i = 0; i < listOfNeighbors[2].length; i++) {
      console.log(`Neighbor: ${listOfNeighbors[2][i]}`);
    }
  }
}


// WHILE LOOP

let percentages3 = [];

let i = 0;
while (i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++
}

console.log(percentages3);
