const fetch = require('node-fetch');

const weather = new Promise((resolve) => {
    setTimeout(() => {
      resolve({ temp: 29, conditions: 'Sunny with Clouds'});
    }, 2000);
});

const tweets = new Promise((resolve) => {
    setTimeout(() => {
      resolve(['I like cake', 'BBQ is good too!']);
    }, 500);
});

// Promise
//     .all([weather, tweets])
//     .then(responses => {
//         const [weatherInfo, tweetsInfo] = resposnes;
//         console.log(weatherInfo, tweetsInfo);
//     });

const data = fetch('https://raw.githubusercontent.com/Margino/nodejs_learning/master/weather/playground/data1111.json');
const streetCarsPromise = fetch('http://data.ratp.fr/api/datasets/1.0/search/?q=paris');

Promise
    .all([data, streetCarsPromise])
    .then(responses => {
        return Promise.all(responses.map(res => res.json()));
    })
    .then(responses => {
        const [dataInfo, streetCars] = responses;
        console.log(dataInfo, undefined, 2);
        console.log(streetCars, undefined, 2);
    })
