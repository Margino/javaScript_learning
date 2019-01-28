const person = Symbol('john');
const man = Symbol('john');

console.log(person === man);
console.log(person == man);

const team = {
    [Symbol('John')] : { age: 22 },
    [Symbol('Mary')] : { age: 33 },
    [Symbol('John')] : { age: 55 }
};

for (const person in team) {
    console.log(person);
}

const syms = Object.getOwnPropertySymbols(team);
console.log(syms);

const data = syms.map(sym => team[sym]);
console.log(data);
