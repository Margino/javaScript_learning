class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    static parse(str) {
        const radius = JSON.parse(str);
        return new Circle(radius);
    }
}

const c = Circle.parse('{"radius": 1}');
console.log(c);
