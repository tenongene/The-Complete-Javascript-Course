'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const game = {
  team1: 'Bayern Munich',
  team2: 'Borussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: { team1: 1.33, x: 3.25, team2: 6.5 },
};
//1.
// const players1 = game.players[0];
// const players2 = game.players[1];
const [players1, players2] = game.players;

//2.
const [gk, ...fieldPlayers] = players2;
console.log(gk);
console.log(fieldPlayers);

//3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4.
// let players1Final = game.players[0].push('Thiago', 'Coutinho', 'Perisic');
// players1Final = game.players[0];
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//5.
// const team1 = game.odds.team1;
// const draw = game.odds.x;
// const team2 = game.odds.team2;
const {
  odds: { team1, x, team2 },
} = game;
console.log(team1, x, team2);

//6.
const printGoals = function (...player) {
  return console.log(`${player.length} goals scored.`);
};

//7.
//team1 < team2 && console.log("Team 1 is more likely to win");

printGoals('Lewandowski', 'Hummels');

//Challenge 2
//1.
const goalArr = [...game.scored.entries()]; // entries method returns an object, so use spread operator to open into an array
for (const [x, y] of goalArr) {
  // Don't foget to use the array brackets when destructuring multiple variables in a loop.
  console.log(`Goal ${x + 1}: ${y}`);
}
// console.log(...goalArr);

//2.
const oddsArr = Object.values(game.odds); //For objects within objects, use object.values() or object.keys() to expand into an array of each (Pass in the object.property(2nd level object))
for (const x of oddsArr) {
  console.log(
    (oddsArr.reduce((acc, mov) => acc + mov, 0) / oddsArr.length).toFixed(2)
  );
}
//console.log(Object.values(game.odds));

//3.
console.log(`Odds of victory for ${game.team1}: ${team1}\n
Odds of a tie: ${x}\n
Odds of victory for ${game.team2}: ${team2}`);

//4.
// const scorers = {
//   Gnarby: 1,
//   Hummels: 1,
//   Lewandowski: 2,
// };
//console.log(scorers);

//Challenge 3
const gameEvents = new Map([
  [17, 'GOAL'],
  [36, 'Substitution'],
  [47, 'GOAL'],
  [61, 'Substitution'],
  [64, 'Yellow Card'],
  [69, 'Red Card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, 'GOAL'],
  [80, 'GOAL'],
  [92, 'Yellow Card'],
]);

//1.
const events = new Set(gameEvents.values());
console.log(events);
console.log([...gameEvents.keys()]);

//2.
gameEvents.delete(64);
console.log(gameEvents);

//3.
const eventArr = [...gameEvents.keys()];
for (const event of eventArr) {
  const eventAvg = (eventArr.reduce((acc, mov) => acc + mov, 0) / 90).toFixed();
  console.log(`An event happened on average every ${eventAvg} minutes.`);
}
// const eventArr = [...gameEvents.keys()];
// for (const event of eventArr) {
//   let total = 0;
//   console.log((total += event)/eventArr.length);
// }

//4.
console.log([...gameEvents]);
for (const [c, d] of [...gameEvents]) {
  console.log(c <= 45 ? `[FIRST HALF] ${c}: ${d}` : `[SECOND HALF] ${c}: ${d}`);
}

//Challenge 4

//1.

const toCamelCase = function (str) {
  let [j, k] = str.split('_');
  j = j.replace(j[0], j[0].toLowerCase());
  k = k.replace(k[0], k[0].toUpperCase());
  str = [j, k].join('');
  return console.log(str);
};

toCamelCase('underscore_case');
toCamelCase('first_name');
toCamelCase('Some_Variable');
toCamelCase('calculate_Age');
toCamelCase('delayed_departure');
