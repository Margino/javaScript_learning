// const revString = (str) => {
//     return str.split('').reverse().join('');
// };

const revString = (str) => {
    return [...str].reverse().join('');
};

console.log(revString('car'));
console.log(revString('bar'));
