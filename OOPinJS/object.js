// factory function
function creatCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}
const circle = creatCircle(1);
console.log(circle);

// constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    };
}
const circle2 = new Circle(1);
console.log(circle2);
