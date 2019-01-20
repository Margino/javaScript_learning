function Circle(radius) {
    this.radius = radius;

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if (!value.x || !value.y) {
                throw new Error('Invalid location');
            }
            defaultLocation = value;
        }
    });

    this.draw = function() {
        console.log(draw);
    };
}

const circle = new Circle(10);
circle.defaultLocation = { x:1, y:1}
console.log(circle);
