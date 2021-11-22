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

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    let answer = prompt(`${this.question}:\n 
        ${this.options.join(', ')} (Write option number)`);
    if (Number(answer) <= 3) {
      this.answers.splice(Number(answer), 1, 1);
      return this.answers;
    } else {
      console.log('Not a valid input');
    }
  },
};

//const newAnswer = poll.registerNewAnswer();
const pollBtn = document.querySelector('.poll');
pollBtn.addEventListener('click', poll.registerNewAnswer.bind(poll));

//console.log(poll.answers);
// console.log(poll.answers.splice(2,1,1));
// console.log(poll.answers);3
// console.log(poll.answers.splice(2,1,+1))
// console.log(poll.answers);
