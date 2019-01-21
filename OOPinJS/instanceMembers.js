'use strict';

function Circle(radius) {
    // Instance members
    this.radius = radius;
    this.move = function() {
        console.log('move');
    }
}

const circle1 = new Circle(1);

// Prototype members
Circle.prototype.draw = function() {
    console.log('Draw');
}

// Returns instance members
console.log(Object.keys(circle1));

// Returns all members
for (let key in circle1) {
    console.log(key);
}
console.log('Move:', circle1.hasOwnProperty('move'));
console.log('Draw:', circle1.hasOwnProperty('draw'));
