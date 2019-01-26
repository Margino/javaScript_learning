const fetch = require('node-fetch');

console.log('goint to fetch');
const postPromise = fetch('https://rawgithubusercontent.com/Margino/nodejs_learning/master/weather/playground/data1111.json')

postPromise
    .then(data => data.json())
    .then(data => console.log(data))
    .catch(err => console.log('Err:', err))

console.log('Done!');


postPromise;
