// when not to use an arrow function

// 1. need the this keyword
// box.addEventListener('click', function()...

// 2. need a method to bind to an object
// const person = {
//                  age: 23,
//                  score() {
//                  ...

// 3. need to add a prototype method
// class Car {
//      constructor(model, year) {
//      ...
// Car.prototype.summ = function () {
//      return `This ${this.model}...

// 4. need arguments object
// const orderChildren = function () => {
//  const children = Array.from(arguments);

const race = '100m Dash';
const winners = ['Imma Joe', 'John Born', 'Ann Sigle'];

const win = winners.map((winner, index) => {
    return {
        name: winner,
        race,
        place: index + 1
    }
});

const win2 = winners.map((winner, i) => ({ name: winner, race, place: i + 1}));

console.table(win);
console.table(win2);


const ages = [83, 39, 67, 92, 13, 89, 67, 73, 51, 60];
const old = ages.filter(age => age >= 60);
console.log('Old', old);


// const box = document.querySelector('#box');
// box.addEventListener('click', function() {
//     let first  = 'oppening';
//     let second = 'open';
//
//     if (this.classList.contains('first')) {
//         [first, second] = [second, first];
//     }
//
//     this.classList.toggle(first);
//     setTimeout(() => {
//         this.classList.toggle(second);
//     }, 500);
//
// });
