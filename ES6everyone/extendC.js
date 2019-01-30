class Animal {
    constructor(name) {
        this.name   = name;
        this.thirst = 100;
        this.belly  = [];
    }
    drink() {
        this.thirst -= 10;
        return this.thirst;
    }
    eat(food) {
        this.belly.push(food);
        return this.belly;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    bark() {
        console.log(`Bark, bark! My name is ${this.name.toUpperCase()}!`);
    }
}

const rhino = new Animal('Rhinney');
console.log(rhino);
rhino.drink();
console.log(rhino);
rhino.eat('grass');
console.log(rhino);

const jack = new Dog('Jack','shepherd');
jack.eat('cat');
console.log(jack);
jack.bark();
