const cars = [
    { model: 'BMW', color: 'red' },
    { model: 'Audi', color: 'blue' },
    { model: 'Lada'}
];

const markup = `
<ul>
  ${cars
      .map(car => `<li>Model: ${car.model}${car.color ? ` (color: ${car.color})` : '' }</li>`)
      .join('')}
</ul>
`;
// console.log(markup);


const car = {
    name: 'BMW',
    model: 'x3',
    colors: ['red', 'blue', 'green']
};

const renderColors = (colors) => {
    return `
        <ul>
            ${colors.map(color => `<li>${color}</li>`).join('')}
        </ul>
    `
};

const markupCar = `
    <div>
        <h1>${car.name}</h1>
        <h2>${car.model}</h2>
        ${renderColors(car.colors)}
    </div>
`;
console.log(markupCar);
