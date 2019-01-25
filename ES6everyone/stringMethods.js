const mark  = 'BMW';
const model = 'x3';
const color = 'red';

const padLeft = (str, length = 10) => {
    return `→ ${'.'.repeat(length - str.length)}${str}`
}

console.log(padLeft(mark));
console.log(padLeft(model));
console.log(padLeft(color));
