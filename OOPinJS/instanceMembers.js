function Circle(radius) {
    this.radius = radius;
    this.move = function() {
        console.log('move');
        // this.draw();
    }
}

Circle.prototype.draw = function() {
    console.log('Draw');
    this.move();
}

const circle1 = new Circle(1);
const circle2 = new Circle(2);

console.log(circle1);
console.log(circle2,);
circle2.draw();
