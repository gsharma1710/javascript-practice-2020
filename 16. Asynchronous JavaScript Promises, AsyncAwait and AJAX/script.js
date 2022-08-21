'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// ? first Ajax
const request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/name/india');
request.send();

request.addEventListener('load',function(){
    console.log(this.responseText);
});
