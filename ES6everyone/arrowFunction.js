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
