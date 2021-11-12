"use strict";

//Coding Challenge 1
let calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

let avDolphins = calcAverage(85, 54, 41);
let avKoalas = calcAverage(23, 34, 27);

console.log(calcAverage(44, 23, 71));
console.log(calcAverage(65, 54, 49));

let checkWinner = (avDolphins, avKoalas) => {
  if (avDolphins >= avKoalas * 2) {
    console.log(`Dolphins win ${avDolphins} vs ${avKoalas}!`);
  } else if (avKoalas >= avDolphins * 2) {
    console.log(`Koalas win ${avKoalas} vs ${avDolphins}!`);
  } else {
    console.log("Winning criteria no met");
  }
};

checkWinner(avDolphins, avKoalas);

//Coding Challenge 2

//let bill = 430;
//let tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;

//console.log(
/*  `The bill was ${bill}, the tip was ${tip}, and the total value is ${
    bill + tip
 }`
);*/

let calcTip = function (bill) {
  let tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
  return tip;
};

console.log(calcTip(100));

let bills = [125, 555, 44];
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

let total = [
  calcTip(bills[0]) + bills[0],
  calcTip(bills[1]) + bills[1],
  calcTip(bills[2]) + bills[2],
];
console.log(total);

//Coding Challenge 3

let obj1 = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function (mass, height) {
    return (mass / height ** 2).toFixed(2);
  },
};

let obj2 = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function (mass, height) {
    return (mass / height ** 2).toFixed(2);
  },
};

//console.log(obj1.calcBMI(78, 1.69));
//console.log(obj2.calcBMI(92, 1.95));

let obj3 = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = (this.mass / this.height ** 2).toFixed(2);
    return this.bmi;
  },
};

let obj4 = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = (this.mass / this.height ** 2).toFixed(2);
    return this.bmi;
  },
};

obj3.calcBMI();
obj4.calcBMI();

console.log(obj3.bmi);
console.log(obj4.bmi);

console.log(
  `Mark's BMI (${obj3.bmi}) is higher than John's BMI (${obj4.bmi})!`
);

//Coding Challenge 4

//let calcTip = function (bill) {
//  let tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
//  return tip;
//};

let Bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let Tips = [];
let Totals = [];

for (let i = 0; i < Bills.length; i++) {
  Tips.push(calcTip(Bills[i]));
  Totals.push(calcTip(Bills[i]) + Bills[i]);
}
console.log(Tips);
console.log(Totals);

let calcBillAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};

console.log(calcBillAverage(Totals));
