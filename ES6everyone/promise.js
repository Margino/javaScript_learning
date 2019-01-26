const fetch = require('node-fetch');

console.log('goint to fetch');
const postPromise = fetch('https://raw.githubusercontent.com/Margino/nodejs_learning/master/weather/playground/data1111.json')

postPromise
    .then(data => data.json())
    // .then(data => console.log(data))
    .catch(err => console.log('Err:', err))
console.log('Done!');


const p = new Promise((resolve, reject) => {
    // resolve(`It's cool!`);
    reject(`It's not cool!`);
});

p
    .then(data => console.log(data))
    .catch(err => console.log(`Err:`,err))
