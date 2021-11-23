'use strict';

const lufthansa = {
  airline: 'lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
  },
};

// lufthansa.book(277, "Bryson Enongene");

//const newAnswer = poll.registerNewAnswer();
// const pollBtn = document.querySelector('.poll');
// pollBtn.addEventListener('click', poll.registerNewAnswer.bind(poll));

//console.log(poll.answers);
// console.log(poll.answers.splice(2,1,1));
// console.log(poll.answers);3
// console.log(poll.answers.splice(2,1,+1))
// // console.log(poll.answers);
// (function () {
//   console.log('This is not cool');
// })();

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

//const booker = secureBooking();

// booker();
// booker();
// booker();
// booker();

// console.dir(booker);

//Coding Challenge 1

const poll = {
  question: 'What is your favorite programming language ?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),

  registerNewAnswer: function () {
    let answer = Number(
      prompt(
        `${this.question}\n ${this.options.join('\n')}\n(Write option number)`
      )
    );
    if (answer <= this.answers.length && typeof answer === 'number') {
      ++this.answers[answer];
      return console.log(this.answers);

      // this.displayResults();
      // this.displayResults('string');
    }
  },
  displayResults: function (type = 'array') {
    if (type === 'array') {
      console.log(`${this.registerNewAnswer()}`);
    } else if (type === 'string') {
      console.log(`Poll results are ${[...this.registerNewAnswer()]}`);
    }
  },
};
// console.log(poll.answers);
//poll.registerNewAnswer();
// poll.displayResults([5,2,3]);
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));


//Coding Challenge 2
  (function (){
    const header = document.querySelector('h1');
    header.style.color= 'red'; 
    
    document.body.addEventListener('click', ()=> header.style.color= 'blue');
  }) ();



// document.querySelector('.poll').addEventListener('click', poll.displayResults.bind(poll));
