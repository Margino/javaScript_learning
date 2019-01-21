let person = {name: 'John'};

Object.defineProperty(person, 'name', {
    writable: false, // can't rename
    enumerable: true, // can loop
    configurable: false // can't remove
});

person.name = 'Eve';
delete person.name;
console.log(person);
console.log(Object.keys(person));
