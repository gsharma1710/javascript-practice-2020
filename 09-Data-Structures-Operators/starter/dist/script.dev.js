'use strict';

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function orderDelivery(_ref) {
    var _ref$starterIndex = _ref.starterIndex,
        starterIndex = _ref$starterIndex === void 0 ? 1 : _ref$starterIndex,
        _ref$mainIndex = _ref.mainIndex,
        mainIndex = _ref$mainIndex === void 0 ? 0 : _ref$mainIndex,
        _ref$time = _ref.time,
        time = _ref$time === void 0 ? '20:00' : _ref$time,
        address = _ref.address;
    console.log("Order received! ".concat(this.starterMenu[starterIndex], " and ").concat(this.mainMenu[mainIndex], " will be delivered to ").concat(address, " at ").concat(time));
  },
  orderPasta: function orderPasta(ing1, ing2, ing3) {
    console.log("Here is your delicious pasta with ".concat(ing1, ", ").concat(ing2, " and ").concat(ing3));
  },
  orderPizza: function orderPizza(mainIngredient) {
    console.log(mainIngredient);

    for (var _len = arguments.length, otherIngredients = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      otherIngredients[_key - 1] = arguments[_key];
    }

    console.log(otherIngredients);
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22
    },
    fri: {
      open: 11,
      close: 23
    },
    sat: {
      open: 0,
      // Open 24 hours
      close: 24
    }
  }
}; // !Rest Pattern Destructuring
// ? This is SPREAD, because it is in the RIGHT side of the =

var arr = [1, 2].concat([3, 4]); // ? This is REST, because it is in the LEFT side of the =

var a = 1,
    b = 2,
    others = [3, 4, 5];
console.log(a, b, others);

var _ref2 = [].concat(_toConsumableArray(restaurant.mainMenu), _toConsumableArray(restaurant.starterMenu)),
    pizza = _ref2[0],
    risotto = _ref2[2],
    otherFood = _ref2.slice(3);

console.log(pizza, risotto, otherFood); //Objects

var _restaurant$openingHo = restaurant.openingHours,
    sat = _restaurant$openingHo.sat,
    weekdays = _objectWithoutProperties(_restaurant$openingHo, ["sat"]);

console.log(weekdays); // ? Functions

var add = function add() {
  var sum = 0;

  for (var i = 0; i < arguments.length; i++) {
    sum += i < 0 || arguments.length <= i ? undefined : arguments[i];
  }

  console.log(sum);
}; // Any arbitary amount of arguments should work for this function


add(2, 3);
add(5, 3, 7, 2); // Another example

var x = [23, 5, 7];
add.apply(void 0, x);
restaurant.orderPizza('mashroom', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushroom');
/*
// ! Spread Operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[1], arr[2]];
console.log(badNewArr);
// ? Using spread operator
const newArr = [1, 2, ...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci']; //Completely a new array
console.log(newMenu);

// Coppy of array
const mainMenuCoppy = [...restaurant.mainMenu];
// Joining 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);
// Iterables:
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);

const ingridients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt("Let's make pasta! Ingredient 2?"),
  // prompt("Let's make pasta! Ingredient 3?"),
];
console.log(ingridients);
// Order pasta function
// restaurant.orderPasta(ingridients[0],ingridients[1],ingridients[3]); old way 
restaurant.orderPasta(...ingridients);
// using spread operator with objects
const newRestaurant = {foundingYear:1998,...restaurant, founder:'Gaurav Sharma'};

console.log(newRestaurant);
// Copy of object
const restaurentCopy = {...restaurant};
restaurentCopy.name = "Sharmas Restaurent";
console.log(restaurentCopy);

// !Destructuring of objects begins
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

//! Destructuring of array

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//! Dstructuring of array above example can be written as
const [x, y, z] = arr;
console.log(x, y, z);

//!getting elements from restaurant categories
// const [first, second] = restaurant.categories;
// console.log(first, second);
//!changing secondary and main item in categories

// skipped pizzeria from the categories
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//!switching varibales without destructuring 
//? First Method

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//? Second Mathod

[main, secondary] = [secondary, main];
console.log(main, secondary);
// console.log(restaurant.order(2,0));

// Receiving 2 return value from a function
const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter,mainCourse);
const nested = [2,4,[5,6]];

// const [i,,j] = nested;
// console.log(i,j);
// ! Doing destructuring inside of desecturing
const [i,,[j,k]] = nested;
console.log(i,j,k); // this gives ous seperate variables

//! setting default values of varibles when we are setting them
const [p=1,q=1,r=1] = [8,9];
console.log(p,q,r);
*/