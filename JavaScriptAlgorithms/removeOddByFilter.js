const evensOnly = (arr) => {
    return arr.filter((num) => num % 2 === 0);
};

console.log(evensOnly([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(evensOnly([21, 26, 28, 29]));
