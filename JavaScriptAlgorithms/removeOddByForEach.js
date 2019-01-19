const evensOnly = (arr) => {
    let evenArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenArr.push(arr[i]);
        }
    }

    // arr.forEach((item) => {
    //     if (item % 2 === 0) {
    //         enenArr.push(item);
    //     }
    // });
    
    return evenArr;
};
console.log(evensOnly([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(evensOnly([21, 26, 28, 29]));


// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] -> [2, 4, 6, 8, 10]
// [21, 26, 28, 29] -> [26, 28]
