// const revString = (str) => {
//     return str.split('').reverse().join('');
// };

// const revString = (str) => {
//     return [...str].reverse().join('');
// };

const revString = (str) => {
    let reverseString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverseString += str[i];
    }
    return reverseString;
};

console.log(revString('car'));
console.log(revString('bar'));
