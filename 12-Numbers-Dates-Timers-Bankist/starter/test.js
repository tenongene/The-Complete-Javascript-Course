'use strict';

// function vowelsAndConsonants(s) {
//   [...s].forEach(function (ltr) {
//     if (
//       ltr === 'a' ||
//       ltr === 'e' ||
//       ltr === 'i' ||
//       ltr === 'o' ||
//       ltr === 'u'
//     ) {
//       console.log(ltr);
//     }
//   });
//   [...s].forEach(function (ltr) {
//     if (
//       ltr != 'a' &&
//       ltr != 'e' &&
//       ltr != 'i' &&
//       ltr != 'o' &&
//       ltr != 'u'
//     ) {
//       console.log(ltr);
//     }
//   });
// }

// const factorial = function (n) {
//   return n < 2 ? 1 : factorial(n - 1) * n;
// };

// console.log(factorial(4));

// function getLetter(s) {
//   let letter;

// Write your code here
//   const setA = ['a', 'e', 'i', 'o', 'u'];
//   const setB = ['b', 'c', 'd', 'f', 'g'];
//   const setC = ['h', 'j', 'k', 'l', 'm'];
//   const setD = ['n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

//   for (let i = 0; i < 100; i++) {
//     switch (s[0]) {
//       case setA[i]:
//         return 'A';
//         break;
//       case setB[i]:
//         return 'B';
//         break;
//       case setC[i]:
//         return 'C';
//         break;
//       case setD[i]:
//         return 'D';
//         break;
//     }
//   }
//}

//console.log(getLetter('quincy'));
//     if (s[0] === setA[i]) {
//         console.log('A');
//     } else if (s[0] === setB[i]) {
//         console.log('B');
//     } else if (s[0] === setC[i]) {
//         console.log('C');
//     } else if (s[0] === setD[i]) {
//         console.log('D');
//     }
// }

//   switch (x) {
//     case setA.includes(s[0]):
//       console.log('A');
//       break;
//     case setB.includes(s[0]):
//       console.log('B');
//       break;
//     case setC.includes(s[0]):
//       console.log('C');
//       break;
//     case setD.includes(s[0]):
//       console.log('D');
//   }
// }

// function getSecondLargest(nums) {
//   // Complete the function
//   let numsUnique = new Set(nums);
//   let numSorted = [...numsUnique].sort((a, b) => a - b);
//   return numSorted[numSorted.length - 2];
// }

// console.log(getSecondLargest([10, 5, 9, 7]));

// function reverseString(s) {
//   try {
//     return s.split('').reverse().join('');
//   } catch (e) {
//     console.error(e);
//     console.log(s);
//   } finally {
//     return console.log (s.split('').reverse().join(''));
//   }
// }

// // reverseString('string');

// function Rectangle(a, b) {
//   let rectangle = {};
//   rectangle.length = a;
//   rectangle.width = b;
//   rectangle.perimeter = 2 * (a + b);
//   rectangle.area = a * b;
//   return rectangle;
// }
// console.log(Rectangle(2, 3));

// function getCount(a) {
    
// }

const cars = [
    {make: 'Toyota', model:'Camry', year: 1991, color: 'blue'},
    {make: 'Lexus', model:'NXT', year: 2020, color: 'silver'}
];


for (const [p,q] in cars[1]) {
    console.log(p,q);
}
// function getCount(a) {
//     let sum = 0;
//     for (let i = 0; i < a.length; i++) {
//         for (x in a[i]) {
//             if (a[i].x == a[i].x) {
//                 return sum ++;
//             }

//         }
//     }
// }