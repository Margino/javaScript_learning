function Dog(name, breed) {
    this.name  = name;
    this.breed = breed;
}
Dog.prototype.bark = function() {
    console.log(`Bark, bark! My name is ${this.name.toUpperCase()}!`);
}

const jack = new Dog('Jack','shepherd');
const mik = new Dog('Mic', 'poodle');
jack.bark();
mik.bark();
