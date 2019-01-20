// factory function
function creatCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

// constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    };
}
const circle       = new Circle(1);
const propertyName = 'location';

circle.location = {x: 1};
console.log(circle);

circle[propertyName] = {y: 2};
console.log(circle);

delete circle.location;
console.log(circle);

for (let key in circle) {
    console.log(key, circle[key]);
}

if ('radius' in circle) {
    console.log('Circle has a radius');
}
