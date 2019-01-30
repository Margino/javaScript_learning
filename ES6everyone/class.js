class Dog {
    constructor(name, breed) {
        this.name  = name;
        this.breed = breed;
    }

    bark() {
        console.log(`Bark, bark! My name is ${this.name.toUpperCase()}!`);
    }
    static info() {
        console.log('One dog is better than two dogs!');
    }
    get desctiption() {
        return `${this.name} is a ${this.breed}`;
    }
    set nickname(value) {
        this.nick = value.trim();
    }
    get nickname() {
        return this.nick;
    }
}

const jack = new Dog('Jack', 'shepherd');
jack.bark();
// jack.info(); error
Dog.info();

console.log(jack.desctiption);

console.log(jack.nickname = 'Jo');
