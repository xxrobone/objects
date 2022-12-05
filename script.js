/* let suomi = {
  capitalCity: 'Helsinki',
  language: 'Finnish',
  currency: 'euro',
}; */
/* 
let countries = [
  {
    finland: {
      capitalCity: 'Helsinki',
      language: 'Finnish',
      currency: 'euro',
    },
  },
  {
    sweden: {
      capitalCity: 'Stockholm',
      language: 'Swedish',
      currency: 'kronor',
    },
  },
  {
    australia: {
      capitalCity: 'Canberra',
      language: 'English, barely',
      currency: 'dollar',
    },
  },
]; */

function Country(name, capitalCity, language, currency) {
  this.name = name;
  this.capitalCity = capitalCity;
  this.language = language;
  this.currency = currency;

  /* document.getElementById(
    'country'
  ).textContent = `The capital city of Finland is ${capitalCity},
      The language spoken is ${language} and the currency is ${currency}`; */
}

let sweden = new Country('Sweden', 'Stockholm', 'Swedish', 'swedish kronor');
let finland = new Country('Finland', 'Helsinki', 'Finnish', 'euro');
let usa = new Country('USA', 'Washington DC', 'English, American', 'us dollar');

let countries = [sweden, finland, usa];

countries.forEach(function (country) {
  let div = document.createElement('div');
  div.classList.add('countryDiv');

  div.textContent = `The capital of ${country.name} is ${country.capitalCity} and the currency is ${country.currency} and the language is ${country.language}`;
  console.log(
    `The capital of ${country.name} is ${country.capitalCity} and the currency is ${country.currency} and the language is ${country.language}`
  );

  document.getElementById('country').appendChild(div);
});
