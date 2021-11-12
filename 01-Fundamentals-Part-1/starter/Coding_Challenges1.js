"use strict";

//Coding Challenge 1
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

markBMI = markBMI.toFixed(1);
johnBMI = johnBMI.toFixed(1);

console.log(markBMI, johnBMI);

let markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);

//Coding Challenge 2

markHigherBMI
  ? console.log("Mark's BMI is higher than John's!")
  : console.log("John's BMI is higher than Mark's!");

markHigherBMI
  ? console.log(`Mark's BMI ${markBMI}  is higher than John's ${johnBMI}!`)
  : console.log(
      `John's BMI  ( ${johnBMI} ) is higher than Mark's ( ${markBMI} )!`
    );

//Coding Challenge 3

let avDolphins = (97 + 112 + 101) / 2;
let avKoalas = (109 + 95 + 107) / 2;

console.log(avDolphins, avKoalas);

if (avDolphins > avKoalas && avDolphins >= 100) {
  console.log("Dolphins win the trophy!");
} else if (avKoalas > avDolphins && avKoalas >= 100) {
  console.log("Koalas with the trophy!");
} else if (avKoalas === avDolphins && avDolphins >= 100 && avKoalas >= 100) {
  console.log("It's a tie!");
}

//Coding Challenge 4

let bill = 430;
let tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value is ${
    bill + tip
  }`
);

