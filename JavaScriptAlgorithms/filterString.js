const noStringArry = (arr) => {
    let newArr = [];

    arr.forEach((item) => {
        if (typeof item === 'number') {
            newArr.push(item)
        }
    });

    return newArr;
};
console.log(noStringArry([2, 'two', 4, 'four', 6, 'six']));
console.log(noStringArry(["a", 24, "d", 32, "b", 7]));

// [2, 'two', 4, 'four', 6, 'six'] -> [2, 4, 6];
// ["a", 24, "d", 32, "b", 7] -> [24, 32, 7];
