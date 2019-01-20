function Circle(radius) {
    this.radius = radius;
    this.defaultLocation = { x: 0, y: 0 };
    this.compliteOptimunLocation = function() {
        // some code here
    };
    this.draw = function() {
        this.compliteOptimunLocation();
        console.log(draw);
    };
}

const circle = new Circle(10);
console.log(circle);
