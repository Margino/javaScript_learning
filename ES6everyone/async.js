const fetch = require('node-fetch');

fetch('https://api.github.com/users/margino')
    .then(res => {
        return res.json();
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log('oh', err);
    })
