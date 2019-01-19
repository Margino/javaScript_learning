const noStringArry = (arr) => {
    return arr.filter((item) => typeof item === 'number');
};

console.log(noStringArry([2, 'two', 4, 'four', 6, 'six']));
console.log(noStringArry(["a", 24, "d", 32, "b", 17]));
