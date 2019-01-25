const details = ['BMW', 'x5', 'red'];
const [mark, model, color] = details;
console.log('Details:', mark, model, color);

const data = 'Audi;7;blue';
const [mr, md, col] = data.split(';');
console.log('Data:', mr, md, col);

const team = [ 'Leo', 'Sue', 'Smith', 'John' ];
const [ captan, assistant, ...players ] = team;
console.log(captan, assistant, players);
