"use strict";

let printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(
      `It will be ${arr[i]} degrees Celsius in ${i + 1} ${
        i === 0 ? "day.." : "days.."
      }`
    );
  }
};

let arr1 = [17, 21, 23];
let arr2 = [12, 5, -5, 0, 4];

printForecast(arr1);
printForecast(arr2);

