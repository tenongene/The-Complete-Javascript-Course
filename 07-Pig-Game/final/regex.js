'use strict';

// let string = 'PIP2P3P4P5P6CCCP7P8P9';

// console.log((string.match(/C/g)).length);

// console.log([...string]);
// console.log(string.match(/\w/g));

// let string = 'Er.Dr.';

// function regexVar() {
//     /*
//      * Declare a RegExp object variable named 're'
//      * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
//      */
//     //let re = /^([aeiou])\w+\1$/g;
//     let re = /[mde][rs][.s]*[a-z]+$/gi;

//     /*
//      * Do not remove the return statement
//      */
//     return re;
// // }

// console.log(regexVar().test(string));

function getDayName(dateString) {
  let dayName = new Date(dateString).getDay();

  // Write your code here
  const dayArr = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return dayArr[dayName];
}

let someDate = '12/07/2016';
let someDate2 = '10/11/2009';
let someDate3 = '11/10/2010';

console.log(getDayName(someDate3));