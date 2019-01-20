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
circle.draw();
