'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// // const flag = object.keys(data.flags);
// // const countryName = o

// const renderCountry = function (data, className = '') {
//   const html = `
//     <article class="country ${className}">
//       <img class="country__img" src="${Object.values(data.flags)[0]}" />
//       <div class="country__data">
//         <h3 class="country__name">${Object.values(data.name)[0]}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)} people</p>
//         <p class="country__row"><span>🗣️</span>${[
//           ...Object.values(data.languages),
//         ]}</p>
//         <p class="country__row"><span>💰</span>${
//           Object.values(data.currencies)[0].name
//         }</p>
//       </div>
//     </article>
//     `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   countriesContainer.style.opacity = 1;
// };

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   });
// };

// ///////////////////////////////////////
// // const request = fetch('https://restcountries.com/v3.1/name/cameroon');
// // console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);

//       const neighbor = data[0].borders[0];

//       if (!neighbor) return;

//       //neighbor countries
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data[0], 'neighbor'));
// };

// getCountryData('korea');

// const wait = seconds => new Promise(resolve => setTimeout(resolve, seconds * 1000));

// wait(2).then(() => {
//     console.log('I waited 2 seconds');
//     return wait(1);
// }).then(() => {
//     console.log('I waited for 1 second');
// })

const whereAmI = async function () {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${country}`
  );
  console.log(response);
};
whereAmI('portugal');
