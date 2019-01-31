function* listOfPeople() {
    yield 'John';
    yield 'Lea';
    yield 'Smith';
}

const people = listOfPeople();

console.log(people);
console.log(people.next());
console.log(people.next());
console.log(people.next());
console.log(people.next());
