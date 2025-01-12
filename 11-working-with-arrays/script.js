'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);
// Map method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

const movementsUsd = movements.map(function(mov){
  return mov * eurToUsd;
});

console.log(movements);
console.log(movementsUsd);

// Creating same thing using for off loop
const movementsUsdfor = []; //empty array
for(const move of movements) movementsUsdfor.push(move * eurToUsd);
console.log(movementsUsdfor);

// Using array function
const movementsArrow = movements.map(mov => mov * eurToUsd);
console.log(movementsArrow);

const movementsDescriptions = movements.map((mov,i) => 
  `Movement ${i + 1}: You ${mov > 0} ${Math.abs(mov)}`

  // if( mov > 3){
  //   return`Dog number ${i+1} is an adult, and is ${mov} years old`;
  // } else {
  //   return`Dog number ${i+1} is still a puppy 🐶`;
  // }
);

console.log(movementsDescriptions);
/*
// Coding Challange 1
const juliaData = [3,5,2,12,7];
const KateData = [4,1,15,8,3];
const juliaData2 = [9,16,6,8,3];
const KateData2 = [10,5,6,1,4];
const checkDogs = function(age1,age2){
  const age1Correct = age1.slice();
  age1Correct.splice(0,1);
  age1Correct.splice(-2);
  
  const dogs = age1Correct.concat(age2);
  dogs.forEach(function(dog,i){
      if( dog >= 3){
        console.log(`Dog number ${i+1} is an adult, and is ${dog} years old`);
      } else {
        console.log(`Dog number ${i+1} is still a puppy 🐶`);
      }
  });
};

checkDogs(juliaData,KateData);
checkDogs(juliaData2,KateData2);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
let arr = ['a','b','c','d','e'];

console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1,-1));
console.log(arr.slice());

// Splice method
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1,2);
console.log(arr);

// REVERSE
arr = ['a','b','c','d','e'];
const arr2 = ['j','i','h','g','f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letter = arr.concat(arr2);
console.log(letter);
console.log([...arr, ...arr2]);

// JOIN
console.log(letter.join(' - '));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//! Using forof loop
for(const moment of movements){
    if(moment > 0 ){
      console.log(`You deposited ${moment}`);
    } else{
      console.log(`You withdrew ${Math.abs(moment)}`);
    }
};
console.log(" ----- For of loop with key and value ----- ");
for(const [i,movement] of movements.entries()){
  if(movement > 0 ){
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else{
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
};

//! Using forEach loop
movements.forEach(function(moment){
  if(moment > 0 ){
    console.log(`You deposited ${moment}`);
  } else{
    console.log(`You withdrew ${Math.abs(moment)}`);
  }
});

console.log(" ----- ForEach loop with key and value ----- ");

movements.forEach(function(mov,i,arr){
  if(mov > 0 ){
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});


const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
// forEach with a map
currencies.forEach(function(value,key, map){
  console.log(`${key} : ${value}`);
});
// forEach with a set
// We can have duplicate parameters so instead of that we can use underscore. Which in JavaScript means  throwaway variable. That means a variable that is completely unncecessary
const currenciesUnique = new Set(['USD','GBP','USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function(value,_,map){
  console.log(`${key} : ${value}`);
});
*/
 